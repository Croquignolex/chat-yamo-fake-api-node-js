const {CASES} = require("../data/cases");
const {MESSAGES} = require("../data/messages");

// Get case by user id with messages
module.exports.getCaseByUserIdWithMessages = (id) => {
    // Search
    const needleData = CASES.find(item => item.userId === parseInt(id));
    if(needleData) {
        // Extract messages
        const messages = MESSAGES.filter(message => message.caseId === needleData.caseId)
        // Response
        return {status: true, data: {...needleData, messages}}
    }
    // Response
    return {status: false, message: "Case not found"}
}

// Get cases
module.exports.getCases = () => {
    return {status: true, data: CASES};
}
