import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendDbAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
 const table = new dynamodb.Table(this, 'Venue_details',{
  partitionKey:{name:'venue_id',type:dynamodb.AttributeType.STRING},
  tableName:'Venue_details',
}
 )

 const lambdaFunction = new lambda.Function(this,'venueOwnerDB',{
  runtime: lambda.Runtime.NODEJS_20_X,
  handler:'index.handler',
  code : lambda.Code.fromAsset('lambda'),
  environment:{
    TABLE_NAME: table.tableName
  }
 })

 table.grantFullAccess(lambdaFunction)

 new apigateway.LambdaRestApi(this, 'VenueList', {
  handler: lambdaFunction,
});
    // example resource
    // const queue = new sqs.Queue(this, 'BackendDbAwsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
