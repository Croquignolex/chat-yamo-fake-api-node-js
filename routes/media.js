const express = require('express');
const router = express.Router();
const {imageMulter} = require("../middlewares/multerMiddleware");

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {userMainImage, uploadImage} = require('../controllers/mediaController');

router.get('/users/:userId/medias/main', userMainImage);
router.get('/chatrooms/:chatroomId/medias', [imageMulter, tokenMiddleware], uploadImage);

module.exports = router;