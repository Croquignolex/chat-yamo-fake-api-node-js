const {getMessages} = require("../helpers/messagesHelper");
const {getCaseByUserIdWithMessages, getCases} = require("../helpers/casesHelper");

// GET: User case with messages
module.exports.userCaseMessages = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const caseResponse = getCaseByUserIdWithMessages(userId);
    // Response
    if(caseResponse.status) res.send(caseResponse.data);
    else res.status(400).send({message: caseResponse.message});
};

// GET: Feedback cases
module.exports.cases = function(req, res) {
    // Fetch backoffice user by login
    const casesResponse = getCases();
    // Response
    if(casesResponse.status) res.send(casesResponse.data);
    else res.status(400).send({message: casesResponse.message});
};


