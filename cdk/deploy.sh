#!/usr/bin/env bash
CDK=./node_modules/aws-cdk/bin/cdk

AWS_PROFILE="Swing"

npm i --unsafe-perm && npm run build || exit 1;

AWS_REGION="ap-northeast-2"
AWS_ACCOUNT=$(aws --profile $AWS_PROFILE sts get-caller-identity --output text --query "Account")

echo "AWS_REGION=$AWS_REGION";
echo "AWS_ACCOUNT=$AWS_ACCOUNT"

echo "=== Init Bootstrap ==="
AWS_PROFILE=$AWS_PROFILE CDK_BOOTSTRAP=true $CDK --profile $AWS_PROFILE bootstrap aws://$AWS_ACCOUNT/$AWS_REGION || exit 1;


echo "=== Deploy App ==="
AWS_PROFILE=$AWS_PROFILE NODE_ENV="production" CDK_STACK_NAME=$CDK_STACK_NAME $CDK --profile $AWS_PROFILE deploy --require-approval "never" --progress "events" --ci true || exit 1;

echo "Deploy Done";

