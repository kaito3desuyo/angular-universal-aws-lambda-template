import lambda from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import appServer from './server';

const server = awsServerlessExpress.createServer(appServer);

module.exports.render = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context
) => {
  awsServerlessExpress.proxy(server, event, context);
};
