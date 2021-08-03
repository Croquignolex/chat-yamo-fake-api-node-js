const {USER_NOT_FOUND} = require("../constants/reponseConstants");
const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// GET: User profile details
module.exports.details = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Query
    const selectSqlQuery = `SELECT * FROM users WHERE id = ? LIMIT 1`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId]);
    // Response
    if(mysqlDatabaseResponse.status) {
        return mysqlDatabaseResponse.data.length > 0
            ? {status: true, data: buildUserResponseData(mysqlDatabaseResponse.data[0])}
            : {status: false, message: USER_NOT_FOUND};
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

// GET: Users profile
module.exports.users = async function(req, res) {

};

// Format response
function buildUserResponseData(user) {
    return {
        age: user.age,
        city: user.city,
        name: user.name,
        userId: user.id,
        gender: user.gender,
        country: user.country,
        province: user.province,
        continent: user.continent,
        homeCountry: user.homeCountry,
        verified: user.verified === 1,
        greetingText: user.greetingText,
        isPremium: user.isPremium === 1
    }
}

