const multer = require("multer");

const {BAD_IMAGE_TYPE} = require("../constants/reponseConstants");
const {generateRandomString} = require("../helpers/functionsHelper");

// Store image
const imageStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        const dir = "medias";
        callback(null, dir);
    },
    filename: (req, file, callback) => {
        callback(null, generateRandomString() + '.jpg');
    }
});

// Image filter type
const imageFilter = function(req, file, callback) {
    // Accept jpg image files only
    if (['image/jpeg', 'image/jpeg'].includes(file.mimetype)) callback(null, true)
    else {
        req.picture = BAD_IMAGE_TYPE;
        callback(null, false);
    }
};

module.exports = {
    mediaMiddleware: multer({
        storage: imageStorage,
        fileFilter: imageFilter
    }).single('picture')
};