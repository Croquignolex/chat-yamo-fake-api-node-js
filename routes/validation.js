const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {deleteUserImage, imagesToBeVerified, verifyImage} = require('../controllers/validationController');

router.get('/users/toBeVerifiedMedia', tokenMiddleware, imagesToBeVerified);
router.delete('/users/:userId/medias/:mediaId', tokenMiddleware, deleteUserImage);
router.put('/users/:userId/medias/:mediaId/paths/:mediaPath/verify/:verified', tokenMiddleware, verifyImage);

module.exports = router;
