const fs = require("fs");

const {MEDIAS} = require("../data/medias");
const {MEDIA_NOT_FOUND, FILE_SYSTEM_ERROR} = require("../constants/reponseConstants");

// Get user main image by id
module.exports.getUserMainImageById = async (id) => {
    // Search
    const needleData = MEDIAS.find(media => (media.userId === parseInt(id)) && (media.caseId === ""));
    // Response
    return needleData
        ? await imageToBytes(needleData.name)
        : {status: false, message: MEDIA_NOT_FOUND}
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
    return {status: true, data: {mediaId: MEDIAS.length, isVerified: false, tooMuchTextDetected: false}};

}

// Convert image string into bytes
const imageToBytes = (imagePath) => {
    return new Promise((resolve) => {
        fs.readFile(`medias//${imagePath}`, function(error, data) {
            if (error) resolve({status: false, message: FILE_SYSTEM_ERROR});
            return resolve({status: true, data});
        });
    })
}

// Generate a random image file name
module.exports.generateImageName = (length = 32) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `${result}.jpg`;
}