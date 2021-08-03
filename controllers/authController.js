const jwt = require('jsonwebtoken');

const {requiredChecker} = require('../helpers/formCheckerHelper');
const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");
const {
    AUTH_FAILED,
    USER_NOT_FOUND,
    USER_LOGGED_OUT,
    FORM_DATA_ERROR,
    USER_AUTHENTICATED,
} = require('../constants/reponseConstants');

// Admin login
module.exports.login = async function(req, res) {
    // Form data
    const {login, password} = req.body;
    // Form checker
    if(requiredChecker(login) && requiredChecker(password)) {
        // Fetch user into database
        const adminResponse = await getAdminByLogin(login);
        if(adminResponse.status) {
            const admin = adminResponse.data;
            // Check login and password match
            if((login === admin.login) && (password === admin.password)) {
                // Generate user token according to his login since is an unique field
                const token = jwt.sign({login: admin.login}, process.env.TOKEN_SECRET);
                // Response
                res.send({token, message: USER_AUTHENTICATED});
            } else res.status(400).send({message: AUTH_FAILED});
        } else res.status(400).send({message: adminResponse.message});
    } else res.status(400).send({message: FORM_DATA_ERROR});
};

// Admin logout
module.exports.logout = async function(req, res) {
    res.send({message: USER_LOGGED_OUT});
}

// Admin profile
module.exports.profile = async function(req, res) {
    // Params data
    const userId = req.userId;
    // Query
    const selectSqlQuery = `SELECT * FROM admins WHERE id = ? LIMIT 1`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [userId]);
    // Response
    if(mysqlDatabaseResponse.status) {
        if(mysqlDatabaseResponse.data.length > 0) {
            const user = mysqlDatabaseResponse.data[0];
            res.send(buildUserResponseData(user));
        } else res.status(400).send({message: USER_NOT_FOUND});
    } else res.status(400).send({message: mysqlDatabaseResponse.message});
};

// Get admin by login
async function getAdminByLogin(login) {
    const selectSqlQuery = `SELECT * FROM admins WHERE login = ? LIMIT 1`;
    const mysqlDatabaseResponse = await mysqlDatabaseConnection(selectSqlQuery, [login]);
    // Response
    if(mysqlDatabaseResponse.status) {
        return mysqlDatabaseResponse.data.length > 0
            ? {status: true, data: mysqlDatabaseResponse.data[0]}
            : {status: false, message: USER_NOT_FOUND};
    } else return {status: false, message: mysqlDatabaseResponse.message};
}

// Format admin response
function buildUserResponseData(user) {
    return {
        name: user.name,
        userId: user.id,
        phone: user.phone,
        email: user.email,
        gender: user.gender,
        address: user.address,
        description: user.description,
    }
}

