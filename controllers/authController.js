const jwt = require('jsonwebtoken');

const {requiredChecker} = require('../helpers/formCheckerHelper');
const {PASSWORD, LOGIN} = require("../constants/generalConstants");
const {
    AUTH_FAILED,
    USER_LOGGED_OUT,
    FORM_DATA_ERROR,
    USER_AUTHENTICATED,
} = require('../constants/reponseConstants');

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

