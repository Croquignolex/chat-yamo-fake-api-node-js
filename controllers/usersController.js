const {users} = require("../helpers/usersHelper");

// GET: User profile details
module.exports.details = async function(req, res) {
    /*// Params data
    const {userId} = req.params;
    // Query
    const selectSqlQuery = `SELECT * FROM users WHERE id = ? LIMIT 1`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId]);
    // Response
    if(mysqlDatabaseResponse.status) {
        return mysqlDatabaseResponse.data.length > 0
            ? {status: true, data: buildUserResponseData(mysqlDatabaseResponse.data[0])}
            : {status: false, message: USER_NOT_FOUND};
    } else res.status(400).send({message: mysqlDatabaseResponse.message});*/
};

// GET: Users profile
module.exports.users = function(req, res) {
    // Fetch users
    const usersResponse = users();
    // Response
    if(usersResponse.status) res.send(usersResponse.data);
    else res.status(400).send({message: usersResponse.message});
};