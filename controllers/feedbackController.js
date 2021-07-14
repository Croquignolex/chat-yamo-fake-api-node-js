const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// GET: feedback messages
module.exports.messages = async function(req, res) {
    // Query
    const selectSqlQuery = `
        SELECT userId, messageId, createdAt, authorId, content, caseId, mediaId
        FROM feedbacks ORDER BY createdAt DESC
    `;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery);
    // Response
    if(mysqlDatabaseResponse.status) {
        const messages = mysqlDatabaseResponse.data;
        res.send(messages);
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

