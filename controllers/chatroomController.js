const {addMessage} = require("../helpers/messagesHelper");
const {requiredChecker} = require("../helpers/formCheckerHelper");

// POST: Backoffice user new message (can also be use from user to backoffice user)
module.exports.newMessage = function(req, res) {
    // Params data
    const receiverId = req.params.userId;
    const sendId = req.params.backofficeUserid;
    // Form data
    const {feedbackText, mediaId, videoId} = req.body;
    // Add message
    const userResponse = addMessage(sendId, receiverId, feedbackText, mediaId, videoId);
    // Response
    if(userResponse.status) res.send();
    else res.status(400).send({message: userResponse.message});
};

module.exports.freeChatroomState = function(req, res) {
    res.send({userId: 1, count: 3});
};

module.exports.activeChatRooms = function(req, res) {
    res.send({moreChatrooms: false, count: 7});
};

module.exports.adMatchesCount = function(req, res) {
    res.send({count: 15});
};

