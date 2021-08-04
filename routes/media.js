const express = require('express');
const router = express.Router();

const {userMainImage} = require('../controllers/mediaController');

router.get('/users/:userId/medias/main', userMainImage);

module.exports = router;