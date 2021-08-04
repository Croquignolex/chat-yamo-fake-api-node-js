const {fileChecker} = require("../helpers/formCheckerHelper");
const {FORM_DATA_ERROR} = require("../constants/reponseConstants");
const {getUserMainImageById, addImageByCaseId} = require("../helpers/mediasHelper");

// GET: User main image
module.exports.userMainImage = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch user main image by id
    const imageResponse = await getUserMainImageById(userId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};

// POST: Upload an image from a chatroom
module.exports.uploadImage = async function(req, res) {
    // Params data
    const {chatroomId} = req.params;
    // Form data
    const {picture} = req.body;
    if(fileChecker(picture)) {
        // Add image into media by case id
        const imageResponse = await addImageByCaseId(chatroomId);
        // Response
        if(imageResponse.status) res.send(imageResponse.data);
        else res.status(400).send({message: imageResponse.message});
    } else res.status(400).send({message: FORM_DATA_ERROR});
};