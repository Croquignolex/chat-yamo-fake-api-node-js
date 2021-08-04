const {MESSAGES} = require("../data/messages");
const {CASE_NOT_FOUND} = require("../constants/reponseConstants");

// Get messages
module.exports.getMessages = () => {
    return {status: true, data: MESSAGES};
}

// Add message
module.exports.addMessages = (senderId, receiverId, content, mediaId) => {
    if([senderId, receiverId].includes(process.env.BACKOFFICE_USER_ID )) {
        // Extract case id
        const caseId = senderId === process.env.BACKOFFICE_USER_ID
            ? `${receiverId}:${senderId}`
            : `${senderId}:${receiverId}` ;
        // Add message
        MESSAGES.push({
            messageId: MESSAGES.length,
            userId: parseInt(receiverId),
            createdAt: new Date().getTime(),
            authorId: parseInt(senderId),
            content,
            caseId: caseId,
            mediaId
        })
        return {status: true};
    }
    return {status: false, message: CASE_NOT_FOUND};
}