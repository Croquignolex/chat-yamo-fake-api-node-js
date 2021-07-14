const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// GET: feedback messages
module.exports.messages = async function(req, res) {
    // Query
    const selectSqlQuery = `SELECT * FROM feedbacks ORDER BY createdAt DESC`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery);
    // Response
    if(mysqlDatabaseResponse.status) {
        const messages = mysqlDatabaseResponse.data;
        res.send(buildFeedbackResponseData(messages));
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

// Format response
function buildFeedbackResponseData(feedback) {
    return {
        userId: feedback.userId,
        caseId: feedback.caseId,
        mediaId: feedback.mediaId,
        content: feedback.content,
        authorId: feedback.authorId,
        messageId: feedback.messageId,
        createdAt: feedback.createdAt,
    }
}



