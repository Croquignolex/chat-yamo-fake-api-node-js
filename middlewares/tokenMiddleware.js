const jwt = require('jsonwebtoken');

const {TOKEN} = require('../constants/generalConstants');
const {INVALID_TOKEN_ERROR, UNAUTHORIZED_REQUEST_ERROR} = require('../constants/reponseConstants');

module.exports.tokenMiddleware = function(req, res, next) {
    // Check token existence
    const token = req.header(TOKEN);
    if(!token) return res.status(401).send({status: false, message: UNAUTHORIZED_REQUEST_ERROR, data: null});

    try {
        // Verify user token in header
        const jwtData = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userId = jwtData.userId;
        // For manual database token blacklist
        req.token = token;
        next();
    } catch (e) {
        res.status(500).send({status: false, message: INVALID_TOKEN_ERROR, data: null});
    }
};