const multer = require("multer");
const {generateImageName} = require("../helpers/mediasHelper");

const imageStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        const dir = "medias";
        callback(null, dir);
        // callback(null, 'config');
    },
    filename: (req, file, callback) => {

        callback(null, generateImageName());
    }
});

const imageFilter = function(req, file, cb) {
    // Accept video only
    if (!file.originalname.match(/jpg/)) {
        req.fileValidationError = 'Only video files are allowed!';
        return cb(new Error('Only video files are allowed!'), false);
    }
    cb(null, true);
};

module.exports = {
    imageMulter: multer({
        storage: imageStorage,
        fileFilter: imageFilter,
    }).single('picture'), // 'audioFile' is the name of the file
};