const express = require('express');
const router = express.Router();

const {mediaMiddleware} = require("../middlewares/mediaMiddleware");
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {userMainImage, uploadImage} = require('../controllers/mediaController');

router.get('/users/:userId/medias/main', userMainImage);
router.post('/chatrooms/:chatroomId/medias', [mediaMiddleware, tokenMiddleware], uploadImage);

module.exports = router;