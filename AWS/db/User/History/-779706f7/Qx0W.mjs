// lambda/index.mjs
import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function handler(event) {
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
        id: '1',
        name: 'John Doe',
        age: 30
      }
  };

  try {
    const data = await dynamoDb.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
