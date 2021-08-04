const {getMessages} = require("../helpers/messagesHelper");
const {mysqlDateForResponse} = require("../helpers/functionsHelper");

// GET: Feedback messages
module.exports.messages = async function(req, res) {
    // Fetch users
    const messagesResponse = getMessages();
    // Response
    if(messagesResponse.status) res.send(messagesResponse.data);
    else res.status(400).send({message: messagesResponse.message});
};

// GET: user case
module.exports.userCase = async function(req, res) {
   /* // Params data
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
    } else res.status(400).send({message: mysqlDatabaseResponse.message});*/
};

// Shared feedback messages
function sharedFeedbackMessages(feedbacks) {
    let messages = [];

    for(const feedback of feedbacks) {
        messages.push({
            userId: feedback.userId,
            caseId: feedback.caseId,
            mediaId: feedback.mediaId,
            content: feedback.content,
            authorId: feedback.authorId,
            messageId: feedback.messageId,
            createdAt: mysqlDateForResponse(feedback.createdAt),
        })
    }

    return messages;
}




