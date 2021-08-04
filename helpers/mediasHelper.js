const fs = require("fs");

const {MEDIAS} = require("../data/medias");
const {MEDIA_NOT_FOUND, FILE_SYSTEM_ERROR} = require("../constants/reponseConstants");

// Get user by id
module.exports.getUserMainImageById = async (id) => {
    // Search
    const needleData = MEDIAS.find(media => (media.userId === parseInt(id)) && (media.caseId === ""));
    // Response
    return needleData
        ? await imageToBytes(needleData.name)
        : {status: false, message: MEDIA_NOT_FOUND}
}

// Convert image string into bytes
const imageToBytes = (imagePath) => {
    return new Promise((resolve) => {
        fs.readFile(`medias\\${imagePath}`, function(error, data) {
            if (error) resolve({status: false, message: FILE_SYSTEM_ERROR});
            return resolve({status: true, data});
        });
    })
}

// Encode to base64
// const encodedImage = new Buffer(data, 'binary').toString('base64');

// Decode from base64
// var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');