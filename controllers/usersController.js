const formCheckerHelper = require("../helpers/formCheckerHelper");
const {
    getUserById,
    getUserMetadataById,
    getUserByEmailOrPhone,
    getUserSouscriptionsById,
    getUserStatusHistoryById
} = require("../helpers/usersHelper");

// GET: User profile details
module.exports.details = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User metadata details
module.exports.metadata = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserMetadataById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User souscription history
module.exports.souscriptions = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserSouscriptionsById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User status history
module.exports.history = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserStatusHistoryById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// POST: Search user by email or phone
module.exports.search = function(req, res) {
    // Form data
    const {attribute} = req.body;
    // Form checker
    if(formCheckerHelper.requiredChecker(attribute)) {
        // Fetch backoffice user by login
        const userResponse = getUserByEmailOrPhone(attribute);
        // Response
        if(userResponse.status) res.send(userResponse.data);
        else res.status(400).send({message: userResponse.message});
    } else res.status(400).send({message: "Form data error"});
};

// POST: Block user profile
module.exports.block = function(req, res) { 
    res.send({status: true, data: null});
};

// GET: User bloack state
module.exports.blockState = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};