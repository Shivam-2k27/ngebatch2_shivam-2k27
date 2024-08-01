// lambda/index.mjs
import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function handler(event) {
  // Check the HTTP method (GET, POST, etc.)
  if (event.httpMethod === 'GET') {
    // Define the parameters for the scan operation
    const params = {
      TableName: process.env.TABLE_NAME,
    };

    try {
      // Use the scan method to retrieve all items
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
  } else {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }
}
