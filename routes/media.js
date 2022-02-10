const express = require('express');
const router = express.Router();

const {mediaMiddleware} = require("../middlewares/mediaMiddleware");
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {userMainImage, uploadImage, chatroomImage, userMainImageUrl} = require('../controllers/mediaController');

router.get('/users/:userId/medias/main', tokenMiddleware, userMainImage);
router.get('/users/:userId/medias/main/info', tokenMiddleware, userMainImageUrl);
router.get('/chatrooms/:chatroomId/medias/:mediaId', tokenMiddleware, chatroomImage);
router.put('/chatrooms/:chatroomId/medias', [mediaMiddleware, tokenMiddleware], uploadImage);

module.exports = router;
