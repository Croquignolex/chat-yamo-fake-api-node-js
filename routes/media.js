const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {userMainImage, uploadImage} = require('../controllers/mediaController');

router.get('/users/:userId/medias/main', userMainImage);
router.get('/chatrooms/:chatroomId/medias', tokenMiddleware, uploadImage);

module.exports = router;