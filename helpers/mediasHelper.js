const fs = require("fs");

const {MEDIAS} = require("../data/medias");
const {MEDIAS_URL} = require("../data/mediasUrl");
const {VERIFICATIONS} = require("../data/verifications");

// Get user main image by id
module.exports.getUserMainImageById = async (id) => {
    // Search
    const needleData = MEDIAS.find(media => (media.userId === parseInt(id)) && (media.caseId === ""));
    // Response
    return needleData
        ? await imageToBytes(needleData.name)
        : {status: false, message: "Media not found"}
}

// Get user main image url by id
module.exports.getUserMainImageUrlById = async (id) => {
    // Search
    const needleData = MEDIAS_URL.find(media => (media.userId === parseInt(id)));
    // Response
    return needleData
        ? {status: true, data: needleData}
        : {status: false, message: "Media not found"}
}

// Get chatroom media image by id
module.exports.getChatroomImageById = async (chatroomId, id) => {
    // Search
    const needleData = MEDIAS.find(media => (media.mediaId === parseInt(id)) && (media.caseId === chatroomId));
    // Response
    return needleData
        ? await imageToBytes(needleData.name)
        : {status: false, message: "Media not found"}
}

// Add image into media using case id
module.exports.addImageByCaseId = async (caseId, filename) => {
    // Add media
    MEDIAS.push({
        mediaId: MEDIAS.length + 1,
        name: filename,
        userId: '',
        caseId,
    });
    // Response
    return {status: true, data: {mediaId: MEDIAS.length, isVerified: false, tooMuchTextDetected: false}};
}

// Delete user image by id
module.exports.deleteUserImageById = async (userId, id) => {
    // Response
    return {status: true, message: "Image deleted"};
}

// Delete user image by id
module.exports.verifiedUserImageById = async (userId, id, mediaPath, verified) => {
    // Response
    return {status: true, message: "Image verification done"};
}

// Images for verification list
module.exports.getImagesForVerification = async () => {
    return {status: true, data: VERIFICATIONS};
}

// Convert image string into bytes
const imageToBytes = (imagePath) => {
    return new Promise((resolve) => {
        fs.readFile(`medias//${imagePath}`, function(error, data) {
            if (error) resolve({status: false, message: "File system error"});
            return resolve({status: true, data});
        });
    })
}
