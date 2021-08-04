const {addMessages} = require("../helpers/messagesHelper");
const {requiredChecker} = require("../helpers/formCheckerHelper");
const {FORM_DATA_ERROR} = require("../constants/reponseConstants");

// POST: Backoffice user new message (can also be use from user to backoffice user)
module.exports.newMessage = function(req, res) {
    // Params data
    const receiverId = req.params.userId;
    const sendId = req.params.backofficeUserid;
    // Form data
    const {feedbackText, mediaId} = req.body;
    if(requiredChecker(feedbackText) || requiredChecker(mediaId)) {
        // Add message
        const userResponse = addMessages(sendId, receiverId, feedbackText, mediaId);
        // Response
        if(userResponse.status) res.send();
        else res.status(400).send({message: userResponse.message});
    } else res.status(400).send({message: FORM_DATA_ERROR});
};