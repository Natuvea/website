#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { InfrStack } from '../lib/infr-stack';

const app = new cdk.App();
new InfrStack(app, 'NatuveaWebsiteStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-west-2' },
  crossRegionReferences: true,
});
