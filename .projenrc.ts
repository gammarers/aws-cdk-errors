import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.4.x',
  jsiiVersion: '5.4.x',
  name: '@gammarers/aws-cdk-errors',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-cdk-errors.git',
  majorVersion: 1,
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['13 16 * * 6']),
    },
  },
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.4.x',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();