const {MESSAGES} = require("../data/messages");

// Add message
module.exports.addMessage = (senderId, receiverId, content, mediaId) => {
    // Check if the backend user is there
    if([senderId, receiverId].includes(process.env.BACKOFFICE_USER_ID)) {
        // Extract useful data
        let caseId, authorId, userId;
        if(senderId === process.env.BACKOFFICE_USER_ID) {
            caseId = `${receiverId}:${senderId}`;
            authorId = senderId;
            userId =  parseInt(receiverId);
        } else {
            caseId = `${senderId}:${receiverId}`;
            authorId = parseInt(senderId);
            userId =  receiverId;
        }
        // Add message
        MESSAGES.push({
            messageId: MESSAGES.length + 1,
            createdAt: new Date().getTime(),
            userId,
            authorId,
            content,
            caseId,
            mediaId
        })
        return {status: true};
    }
    return {status: false, message: "Case not found"};
}
