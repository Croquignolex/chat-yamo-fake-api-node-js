const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// GET: profile details
module.exports.details = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Query
    const selectSqlQuery = `
        SELECT id AS userId, name, age, gender, city, country, continent, greetingText, province, homeCountry, verified, isPremium
        FROM users
        WHERE userId = ?
    `;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId]);
    // Response
    if(mysqlDatabaseResponse.status) {
        const user = mysqlDatabaseResponse.data;
        res.send(user);
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

