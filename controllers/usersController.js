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

// GET: User metadata details
module.exports.status = function(req, res) {
    res.send({deleted: false, blocked: false});
};

// GET: User metadata details
module.exports.exportCVS = function(req, res) {
    res.send();
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

// GET: User metadata details
module.exports.appData = function(req, res) {
    res.send({
        status : 'Available',
        deviceType : "Iphone",
        languageCode : 'EN',
        appVersion : '10.23.6',
        release : 'R-251',
        sdkInt : '5935',
        manufacturer : 'Apple',
        model : 'Iphone Xs Mas',
        hardware : 'Iphone Pro',
        device : 'Iphone',
        deviceConsistentId : '26354651654566',
        deviceCountryIsoCode : 'CM',
    });
};