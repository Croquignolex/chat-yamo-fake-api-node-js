const {getMessages} = require("../helpers/messagesHelper");
const {getCaseByUserIdWithMessages, getCasesWithLastMessage} = require("../helpers/casesHelper");

// GET: Feedback messages
module.exports.messages = async function(req, res) {
    // Fetch users
    const messagesResponse = getMessages();
    // Response
    if(messagesResponse.status) res.send(messagesResponse.data);
    else res.status(400).send({message: messagesResponse.message});
};

// GET: User case with messages
module.exports.userCaseMessages = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const caseResponse = getCaseByUserIdWithMessages(userId);
    // Response
    if(caseResponse.status) res.send(caseResponse.data);
    else res.status(400).send({message: caseResponse.message});
};

// GET: cases with last message
module.exports.cases = async function(req, res) {
    // Fetch backoffice user by login
    const casesResponse = getCasesWithLastMessage();
    // Response
    if(casesResponse.status) res.send(casesResponse.data);
    else res.status(400).send({message: casesResponse.message});
};


