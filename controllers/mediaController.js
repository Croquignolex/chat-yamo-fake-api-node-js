const {
    addMediaByCaseId,
    getUserImagesById,
    getUserMainImageById,
    getChatroomImageById,
    getChatroomImageUrlById,
    getUserMainImageUrlById
} = require("../helpers/mediasHelper");

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

// GET: User images
module.exports.userImages = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch user main image by id
    const imageResponse = await getUserImagesById(userId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};

// GET: Images to be verified count
module.exports.imagesToBeVerifiedCount = async function(req, res) {
    res.send();
};

// GET: Images verified count
module.exports.imagesVerifiedCount = async function(req, res) {
    res.send({count: 50});
};

// GET: User main image url
module.exports.userMainImageUrl = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch user main image by id
    const imageResponse = await getUserMainImageUrlById(userId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};

// POST: Upload an image from a chatroom
module.exports.uploadImage = async function(req, res) {
    // File data from multer (error management)
    const mediaError = req.media;
    if(mediaError) res.status(415).send({message: mediaError});
    if(!req.file) res.status(400).send({message: "Form data error"});
    const {filename} = req.file;
    // Params data
    const {chatroomId} = req.params;
    // Add media into media by case id
    const mediaResponse = await addMediaByCaseId(chatroomId, filename);
    // Response
    if(mediaResponse.status) res.send(mediaResponse.data);
    else res.status(400).send({message: mediaResponse.message});
};

// POST: Upload a video from a chatroom
module.exports.uploadVideo = async function(req, res) {
    // File data from multer (error management)
    const mediaError = req.media;
    if(mediaError) res.status(415).send({message: mediaError});
    if(!req.file) res.status(400).send({message: "Form data error"});
    const {filename} = req.file;
    // Params data
    const {chatroomId} = req.params;
    // Add media into media by case id
    const mediaResponse = await addMediaByCaseId(chatroomId, filename);
    // Response
    if(mediaResponse.status) res.send(mediaResponse.data);
    else res.status(400).send({message: mediaResponse.message});
};

// GET: Chatroom media image by id
module.exports.chatroomImage = async function(req, res) {
    // Params data
    const {mediaId, chatroomId} = req.params;
    // Fetch user main image by id
    const imageResponse = await getChatroomImageById(chatroomId, mediaId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};

// GET: Chatroom media image by id url
module.exports.chatroomImageUrl = async function(req, res) {
    // Params data
    const {mediaId, chatroomId} = req.params;
    // Fetch user main image by id
    const imageResponse = await getChatroomImageUrlById(chatroomId, mediaId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};
