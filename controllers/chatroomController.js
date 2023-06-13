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
