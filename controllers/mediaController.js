const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// GET: user main image
module.exports.image = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Query
    const selectSqlQuery = `SELECT * FROM medias WHERE userId = ? LIMIT 1`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId]);
    // Response
    if(mysqlDatabaseResponse.status) {
        const media = mysqlDatabaseResponse.data;
        res.send(buildMediaResponseData(media));
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

// Format response
function buildMediaResponseData(feedback) {
    return [];
}
