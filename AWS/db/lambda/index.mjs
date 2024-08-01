// lambda/index.mjs
import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function handler(event) {
  const { httpMethod, body, pathParameters } = event;

  if (httpMethod === 'GET') {
    const params = {
      TableName: process.env.TABLE_NAME,
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
  } else if (httpMethod === 'PUT') {
    const item = JSON.parse(body);
    const params = {
      TableName: process.env.TABLE_NAME,
      Item: item,
    };

    try {
      await dynamoDb.put(params).promise();
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item updated successfully' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else if (httpMethod === 'DELETE') {
    const { id } = pathParameters;
    const params = {
      TableName: process.env.TABLE_NAME,
      Key: { id: id },
    };

    try {
      await dynamoDb.delete(params).promise();
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item deleted successfully' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }
}
