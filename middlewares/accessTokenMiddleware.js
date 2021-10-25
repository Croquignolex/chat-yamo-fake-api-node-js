const jwt = require('jsonwebtoken');

const {TOKEN} = require('../constants/generalConstants');
const {INVALID_TOKEN_ERROR, UNAUTHORIZED_REQUEST_ERROR} = require('../constants/reponseConstants');

module.exports.tokenMiddleware = function(req, res, next) {
    // Check token existence
    const bearToken = req.header(TOKEN);
    if(!bearToken) return res.status(401).send({message: UNAUTHORIZED_REQUEST_ERROR});

    try {
        // Verify user token in header
        const token = bearToken.split(' ');
        const jwtData = jwt.verify(token[1], process.env.TOKEN_SECRET);
        req.login = jwtData.login;
        next();
    } catch (e) {
        res.status(401).send({message: INVALID_TOKEN_ERROR});
    }
};
