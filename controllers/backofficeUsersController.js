const jwt = require('jsonwebtoken');

const formCheckerHelper = require('../helpers/formCheckerHelper');
const backofficeUsersHelper = require("../helpers/backofficeUsersHelper");

// POST: Backoffice user login
module.exports.login = function(req, res) {
    // Form data
    const {login, password} = req.body;
    // Form checker
    if(formCheckerHelper.requiredChecker(login) && formCheckerHelper.requiredChecker(password)) {
        // Fetch backoffice user by login
        const backofficeUserResponse = backofficeUsersHelper.getBackofficeUserByLogin(login);
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
                res.send({
                    entityId: backofficeUserData.id,
                    userToken: token,
                    userDetails: {
                        username: backofficeUserData.username,
                        firstName: backofficeUserData.firstName,
                        lastName: backofficeUserData.lastName,
                        roles: []
                    }
                });
            } else res.status(400).send({message: "Auth error"});
        } else res.status(400).send({message: backofficeUserResponse.message});
    } else res.status(400).send({message: "Form data error"});
};

// POST: Backoffice user password change
module.exports.password = function(req, res) {
    // Form data
    const {oldPassword, newPassword} = req.body;
    const backofficeUserId = req.params.backofficeUserId;
    // Form checker
    if(oldPassword !== newPassword) {
        if(formCheckerHelper.requiredChecker(oldPassword) && formCheckerHelper.requiredChecker(newPassword)) {
            // Fetch backoffice user by login
            const backofficeUserResponse = backofficeUsersHelper.getBackofficeUserById(backofficeUserId);
            if (backofficeUserResponse.status) {
                const backofficeUserData = backofficeUserResponse.data;
                // Check old password and password match
                if (oldPassword === backofficeUserData.password) {
                    // Response (mock data, update unavailable)
                    res.send({status: true, message: "password changed"});
                } else res.status(400).send({message: "Old password error"});
            } else res.status(400).send({message: backofficeUserResponse.message});
        } else res.status(400).send({message: "Form data error"});
    } else res.status(400).send({message: "New password must be different from old password"});
};
