const {deleteUserImageById, verifiedUserImageById, getImagesForVerification} = require("../helpers/mediasHelper");

// DELETE: Delete user image
module.exports.deleteUserImage = async function(req, res) {
    // Params data
    const {userId, mediaId} = req.params;
    // Fetch user main image by id
    const imageResponse = await deleteUserImageById(userId, mediaId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};

// PUT: Verify user image
module.exports.verifyImage = async function(req, res) {
    // Fetch user main image by id
    const imageResponse = await verifiedUserImageById();
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};

// GET: Images to be verified
module.exports.imagesToBeVerified = async function(req, res) {
    // Fetch images
    const imagesForVerificationResponse = await getImagesForVerification();
    // Response
    if(imagesForVerificationResponse.status) res.send(imagesForVerificationResponse.data);
    else res.status(400).send({message: imagesForVerificationResponse.message});
};



