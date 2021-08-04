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
    if (!file.originalname.match(/jpg/)) {
        return callback(new Error('Only jgp files are allowed!'), false);
    }
    callback(null, true);
};

module.exports = {
    imageMulter: multer({storage: imageStorage, fileFilter: imageFilter}).single('picture')
};