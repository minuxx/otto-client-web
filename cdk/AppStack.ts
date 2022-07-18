import { Construct, CfnOutput, Duration, NestedStack, NestedStackProps, Stack, StackProps, RemovalPolicy } from '@aws-cdk/core';
import * as S3 from '@aws-cdk/aws-s3';
import * as Route53 from '@aws-cdk/aws-route53';
import * as Route53Targets from '@aws-cdk/aws-route53-targets';
import * as CertificateManager from '@aws-cdk/aws-certificatemanager';
import * as CloudFront from '@aws-cdk/aws-cloudfront';
import * as IAM from '@aws-cdk/aws-iam';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import * as Path from "path";


export class AppStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const context = {
            hostedZone: this.node.tryGetContext("hostedZone"),
            recordName: this.node.tryGetContext("recordName"),
            domainName: ""
        };
        context.domainName = context.recordName == "" ? context.hostedZone : `${context.recordName}.${context.hostedZone}`;

        const cdnBucket = new S3.Bucket(this, "cdn-s3", {
            removalPolicy: RemovalPolicy.DESTROY,
            blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL
        });

        // DNS
        const hostedZone = Route53.HostedZone.fromLookup(this, 'HostedZone', { domainName: context.hostedZone });

        // Certificate: 인증서 만들기, 자동 갱신용 Lambda가 만들어짐
        const certificate = new CertificateManager.DnsValidatedCertificate(this, 'Certificate', {
            domainName: context.domainName,
            hostedZone,
            region: "us-east-1"
        });

        // CF -> S3 (Origin Access Identify): CloudFront에서 S3파일 접근용 권한 설정, 없으면 S3에 전부 Public Access걸어야함
        const oai = new CloudFront.OriginAccessIdentity(this, 'OAI', { comment: "Created by CDK" });
        const bucketPolicy = new S3.BucketPolicy(this, "OAIPolicy", { bucket: cdnBucket });
        bucketPolicy.document.addStatements(new IAM.PolicyStatement({
            effect: IAM.Effect.ALLOW,
            principals: [oai.grantPrincipal],
            actions: ["s3:*"],
            resources: [cdnBucket.bucketArn + "/*"]
        }));

        // CloudFront: 경로별 분기 처리
        const distribution = new CloudFront.CloudFrontWebDistribution(this, 'Distribution', {

            // ap-northeast-2 included class: CLASS 100보다 단가가 있지만 100은 서울 리전이 없어서 느림
            priceClass: CloudFront.PriceClass.PRICE_CLASS_200,

            // https certificate: 인증서 연동
            viewerCertificate: CloudFront.ViewerCertificate.fromAcmCertificate(certificate, {
                aliases: [context.domainName],
                securityPolicy: CloudFront.SecurityPolicyProtocol.TLS_V1_2_2019
            }),

            // http -> https redirect: http로 접속시 https로 이동
            viewerProtocolPolicy: CloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,

            //defaultRootObject: "/", // express에서 /로 접근했는데 index.html로 잡히는 기본값 수정

            // routing
            originConfigs: [
                { // S3 Upload: CDN용, 캐싱함
                    s3OriginSource: {
                        s3BucketSource: cdnBucket,
                        originAccessIdentity: oai,
                        originPath: ""
                    },
                    behaviors: [{
                        isDefaultBehavior: true,
                        allowedMethods: CloudFront.CloudFrontAllowedMethods.ALL,
                        forwardedValues: {
                            headers: [
                                "Access-Control-Request-Headers",
                                "Access-Control-Request-Method",
                                "Origin"
                            ],
                            queryString: false
                        }
                    }]
                }
            ],
            errorConfigurations: [
                {
                    errorCode: 404,
                    responseCode: 200,
                    responsePagePath: "/"
                },
                {
                    errorCode: 403,
                    responseCode: 200,
                    responsePagePath: "/"
                }
            ]
        });

        new BucketDeployment(this, 'DeployPublicStatic', {
            sources: [Source.asset(Path.resolve(__dirname, "../build"))],
            destinationBucket: cdnBucket,
            distribution,
            distributionPaths: ["/*"]
        });

        // Route53 DNS A Record: Route53에 레코드 추가
        new Route53.ARecord(this, 'DNSRecord', {
            zone: hostedZone,
            recordName: context.recordName,
            target: Route53.RecordTarget.fromAlias(new Route53Targets.CloudFrontTarget(distribution))
        });

        new CfnOutput(this, "Distribution-Name", { value: distribution.distributionDomainName });
    }
}
