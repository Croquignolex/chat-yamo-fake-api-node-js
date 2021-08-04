const {CASES} = require("../data/cases");
const {USERS} = require("../data/users");
const {MESSAGES} = require("../data/messages");
const {CASE_NOT_FOUND, USER_NOT_FOUND, MESSAGES_NOT_FAILED} = require("../constants/reponseConstants");

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
    return {status: false, message: CASE_NOT_FOUND}
}

// Get cases with last messages
module.exports.getCasesWithLastMessage = () => {
    const caseBuilder = [];
    // Build
    for(const item of CASES) {
        // Search user
        const needleUserData = USERS.find(user => user.userId === item.userId);
        if(needleUserData) {
            // Extract messages
            const messages = MESSAGES.filter(message => message.caseId === item.caseId)
            const messagesLength = messages.length;
            if(messagesLength > 0) {
                // Puck last message
                const lastMessage = messages[messagesLength - 1]
                // Push
                caseBuilder.push({...item, user: needleUserData, lastMessage})
            } else return {status: false, message: MESSAGES_NOT_FAILED}
        } else return {status: false, message: USER_NOT_FOUND}
    }
    // response
    return {status: true, data: caseBuilder}
}