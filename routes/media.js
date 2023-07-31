const express = require('express');
const router = express.Router();

const {mediaMiddleware} = require("../middlewares/mediaMiddleware");
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {
    identity,
    userImages,
    uploadImage,
    uploadVideo,
    userMainImage,
    chatroomImage,
    suspiciousState,
    userMainImageUrl,
    chatroomImageUrl,
    imagesVerifiedCount,
    imagesToBeVerifiedCount
} = require('../controllers/mediaController');

router.get('/users/:userId/medias', tokenMiddleware, userImages);
router.get('/users/:userId/medias/main', tokenMiddleware, userMainImage);
router.get('/users/:userId/identityVerification', tokenMiddleware, identity);
router.get('/alltonote/:userId/medias/main', tokenMiddleware, userMainImage);
router.get('/users/:userId/medias/main/info', tokenMiddleware, userMainImageUrl);
router.get('/chatrooms/:chatroomId/medias/:mediaId', tokenMiddleware, chatroomImage);
router.get('/users/:backofficeUserId/allnoted', tokenMiddleware, imagesVerifiedCount);
router.post('/users/:backofficeUserId/noted', tokenMiddleware, imagesToBeVerifiedCount);
router.get('/backoffice/users/:userId/suspiciousstate', tokenMiddleware, suspiciousState);
router.get('/chatrooms/:chatroomId/medias/:mediaId/info', tokenMiddleware, chatroomImageUrl);
router.put('/chatrooms/:chatroomId/medias', [mediaMiddleware, tokenMiddleware], uploadImage);
router.put('/chatrooms/:chatroomId/audios', [mediaMiddleware, tokenMiddleware], uploadVideo);

module.exports = router;
