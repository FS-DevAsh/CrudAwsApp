const AWS = require('aws-sdk');
const getTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();     
    const {id} = event.pathParameters;

    await dynamodb.delete({
        TableName: 'TaskTable',
        Key: {
            id
        },
       }).promise();
    return {
        status: 200,
        body: {
            message: 'Task deleted successfully',
        },
    };
}

module.exports = {
    getTask,
};