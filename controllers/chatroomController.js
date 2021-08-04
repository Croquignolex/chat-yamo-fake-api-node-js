const {addMessages} = require("../helpers/messagesHelper");

// POST: Backoffice user new message (can also be use from user to backoffice user)
module.exports.newMessage = async function(req, res) {
    // Params data
    const receiverId = req.userId;
    const sendId = req.backofficeUserid;
    // Form data
    const {feedbackText, mediaId} = req.body;
    // Add message
    const userResponse = addMessages(sendId, receiverId, feedbackText, mediaId);
    // Response
    if(userResponse.status) res.send();
    else res.status(400).send({message: userResponse.message});
};