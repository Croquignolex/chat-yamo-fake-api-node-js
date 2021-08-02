const jwt = require('jsonwebtoken');

const {requiredChecker} = require('../helpers/formCheckerHelper');
const {PASSWORD, LOGIN} = require("../constants/generalConstants");
const {
    AUTH_FAILED,
    USER_LOGGED_OUT,
    FORM_DATA_ERROR,
    USER_AUTHENTICATED, USER_NOT_FOUND,
} = require('../constants/reponseConstants');
const {mysqlDatabaseConnection} = require("../helpers/mysqlDatabaseHelper");

// Login check
module.exports.login = async function(req, res) {
    // Form data
    const {login, password} = req.body;

    // Form checker
    if(requiredChecker(login) && requiredChecker(password)) {
        // User dummy information
        const dummyUser = {
            id: process.env.USER_ID,
            name: process.env.USER_NAME
        };
        // Auth
        const auth = (login === LOGIN && password === PASSWORD);
        if(auth) {
            // Generate user token according to his username
            const token = jwt.sign({userId: dummyUser.id}, process.env.TOKEN_SECRET);
            // Response
            res.send({token, user: dummyUser, message: USER_AUTHENTICATED});
        } else res.status(400).send({message: AUTH_FAILED});
    } else res.status(400).send({message: FORM_DATA_ERROR});
};

// User logout
module.exports.logout = async function(req, res) {
    res.send({message: USER_LOGGED_OUT});
}

// User profile
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

// Format response
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

