#!/usr/bin/env node

import * as CDK from '@aws-cdk/core';
import { AppStack } from './AppStack';

const app = new CDK.App();
new AppStack(app, "dayrider-ranking-pilot-swingmobility-dev", { 
    env:  { 
        region: "ap-northeast-2", 
        account: process.env["CDK_DEFAULT_ACCOUNT"] 
    },
    terminationProtection: true,
    description: "dayrider.ranking.pilot.swingmobility.dev"
});

