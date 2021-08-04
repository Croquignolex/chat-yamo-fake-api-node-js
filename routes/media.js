const express = require('express');
const router = express.Router();

const {userMainImage} = require('../controllers/mediaController');
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");

router.get('/users/:userId/medias/main', tokenMiddleware, userMainImage);

module.exports = router;