const jwt = require('jsonwebtoken');

const {TOKEN} = require('../constants/generalConstants');

module.exports.tokenMiddleware = function(req, res, next) {
    // Check token existence
    const bearToken = req.header(TOKEN);
    if(!bearToken) return res.status(403).send({message: "Unauthorized request error"});

    try {
        // Verify user token in header
        const token = bearToken.split(' ');
        const jwtData = jwt.verify(token[1], process.env.TOKEN_SECRET);
        req.login = jwtData.login;
        next();
    } catch (e) {
        res.status(403).send({message: "Invalid token error"});
    }
};
