const {addMessage} = require("../helpers/messagesHelper");
const {requiredChecker} = require("../helpers/formCheckerHelper");

// POST: Backoffice user new message (can also be use from user to backoffice user)
module.exports.newMessage = function(req, res) {
    // Params data
    const receiverId = req.params.userId;
    const sendId = req.params.backofficeUserid;
    // Form data
    const {feedbackText, mediaId, videoId} = req.body;
    const media = videoId || mediaId;
    if(requiredChecker(feedbackText) || requiredChecker(media)) {
        // Add message
        const userResponse = addMessage(sendId, receiverId, feedbackText, media);
        // Response
        if(userResponse.status) res.send();
        else res.status(400).send({message: userResponse.message});
    } else res.status(400).send({message: "Form data error"});
};
