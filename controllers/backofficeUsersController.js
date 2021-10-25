const jwt = require('jsonwebtoken');

const {requiredChecker} = require('../helpers/formCheckerHelper');
const {getBackofficeUserByLogin} = require("../helpers/backofficeUsersHelper");
const {AUTH_FAILED, FORM_DATA_ERROR} = require('../constants/reponseConstants');

// POST: Backoffice user login
module.exports.login = function(req, res) {
    // Form data
    const {login, password} = req.body;
    // Form checker
    if(requiredChecker(login) && requiredChecker(password)) {
        // Fetch backoffice user by login
        const backofficeUserResponse = getBackofficeUserByLogin(login);
        if(backofficeUserResponse.status) {
            const backofficeUserData = backofficeUserResponse.data;
            // Check login and password match
            if((login === backofficeUserData.login) && (password === backofficeUserData.password)) {
                // Generate user token according to his login since is an unique field
                const token = jwt.sign(
                    {id: backofficeUserData.id},
                    process.env.TOKEN_SECRET,
                    {expiresIn: "10h"}
                );
                // Response
                res.send({status: 204, entityId: backofficeUserData.id, userToken: token});
            } else res.status(400).send({message: AUTH_FAILED});
        } else res.status(400).send({message: backofficeUserResponse.message});
    } else res.status(400).send({message: FORM_DATA_ERROR});
};
