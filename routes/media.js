const express = require('express');
const router = express.Router();

const {mediaMiddleware} = require("../middlewares/mediaMiddleware");
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {
    userImages,
    uploadImage,
    userMainImage,
    chatroomImage,
    userMainImageUrl,
    chatroomImageUrl,
    imagesVerifiedCount,
    imagesToBeVerifiedCount
} = require('../controllers/mediaController');

router.get('/users/:userId/medias', tokenMiddleware, userImages);
router.get('/users/:userId/medias/main', tokenMiddleware, userMainImage);
router.get('/alltonote/:userId/medias/main', tokenMiddleware, userMainImage);
router.get('/users/:userId/medias/main/info', tokenMiddleware, userMainImageUrl);
router.get('/chatrooms/:chatroomId/medias/:mediaId', tokenMiddleware, chatroomImage);
router.get('/users/:backofficeUserId/allnoted', tokenMiddleware, imagesVerifiedCount);
router.get('/users/:backofficeUserId/noted', tokenMiddleware, imagesToBeVerifiedCount);
router.get('/chatrooms/:chatroomId/medias/:mediaId/info', tokenMiddleware, chatroomImageUrl);
router.put('/chatrooms/:chatroomId/medias', [mediaMiddleware, tokenMiddleware], uploadImage);

module.exports = router;
