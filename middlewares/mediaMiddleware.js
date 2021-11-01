const multer = require("multer");

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
        req.picture = "Bad image type";
        callback(null, false);
    }
};

module.exports = {
    mediaMiddleware: multer({
        storage: imageStorage,
        fileFilter: imageFilter
    }).single('picture')
};
