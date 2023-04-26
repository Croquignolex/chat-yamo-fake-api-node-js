const {getCaseByUserIdWithMessages, getCases} = require("../helpers/casesHelper");
const formCheckerHelper = require("../helpers/formCheckerHelper");
const {getUserByEmailOrPhone} = require("../helpers/usersHelper");

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
    if(casesResponse.status) res.send({messages: casesResponse.data});
    else res.status(400).send({message: casesResponse.message});
};

// POST: Report user profile
module.exports.report = function(req, res) {
    // Form data
    const {feedbackText} = req.body;
    // Form checker
    if(formCheckerHelper.requiredChecker(feedbackText)) {
        res.send({status: true, data: null});
    } else res.status(400).send({message: "Form data error"});
};

module.exports.roles = function(req, res) {
    const data = {
        roles: [
            "imageverifier",
            "admin",
            "writer",
            "imagechecker",
            "userlistviewer",
            "subcriptionactivator"
        ]
    };
    res.send({status: true, data});
};

