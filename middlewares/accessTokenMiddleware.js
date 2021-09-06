const jwt = require('jsonwebtoken');

const {TOKEN} = require('../constants/generalConstants');
const {INVALID_TOKEN_ERROR, UNAUTHORIZED_REQUEST_ERROR} = require('../constants/reponseConstants');

module.exports.tokenMiddleware = function(req, res, next) {
    // Check token existence
    const bearToken = req.header(TOKEN);
    if(!bearToken) return res.status(401).send({message: UNAUTHORIZED_REQUEST_ERROR});

    // Verify user token in header
    const token = bearToken.split(' ')[1];
    if(token === process.env.BACKOFFICE_SERVICE_JWT) {
        return next();
    }
    res.status(406).send({message: INVALID_TOKEN_ERROR});
};