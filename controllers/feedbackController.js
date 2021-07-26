const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// GET: feedback messages
module.exports.messages = async function(req, res) {
    // Query
    const selectSqlQuery = `SELECT * FROM feedbacks ORDER BY createdAt DESC`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery);
    // Response
    if(mysqlDatabaseResponse.status) {
        const messages = mysqlDatabaseResponse.data;
        res.send(buildFeedbackMessagesResponseData(messages));
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

// GET: user case
module.exports.userCase = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Query to get user case
    const selectSqlQuery = `SELECT * FROM cases WHERE userId = ? LIMIT 1`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId]);
    // Response
    if(mysqlDatabaseResponse.status) {
        const userCase = mysqlDatabaseResponse.data;
        // Query to get user case messages
        const selectSqlQuery = `SELECT * FROM feedbacks WHERE userId = ? AND caseId = ?`;
        const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId, userCase.id]);
        // Response
        if(mysqlDatabaseResponse.status) {
            const userCaseMessages = mysqlDatabaseResponse.data;
            res.send(buildFeedbackCaseMessagesResponseData(userCase, userCaseMessages));
        } else res.status(400).send({message: mysqlDatabaseResponse.message});
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

// Format response
function buildFeedbackMessagesResponseData(feedbacks) {
    return sharedFeedbackMessages(feedbacks);
}

// Format response
function buildFeedbackCaseMessagesResponseData(userCase, feedbacks) {
    return {
        name: userCase.name,
        status: userCase.status,
        userId: userCase.userId,
        closedAt: userCase.closedAt,
        createdAt: userCase.createdAt,
        messages: sharedFeedbackMessages(feedbacks),
    };
}

// Shared feedback messages
function sharedFeedbackMessages(feedbacks) {
    let messages = [];

    feedbacks.forEach(feedback => {
        messages.push({
            userId: feedback.userId,
            caseId: feedback.caseId,
            mediaId: feedback.mediaId,
            content: feedback.content,
            authorId: feedback.authorId,
            messageId: feedback.messageId,
            createdAt: feedback.createdAt,
        })
    });

    return messages;
}




