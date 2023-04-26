const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {deleteUserImage, imagesToBeVerified, verifyImage} = require('../controllers/validationController');
const {imagesVerifiedCount} = require('../controllers/mediaController');

router.get('/alltonote', tokenMiddleware, imagesVerifiedCount);
router.post('/users/:userId/medias/note', tokenMiddleware, verifyImage);
router.get('/users/toBeNotedMedia', tokenMiddleware, imagesToBeVerified);
router.get('/users/toBeVerifiedMedia', tokenMiddleware, imagesToBeVerified);
router.get('/users/allToBeNotedMedias', tokenMiddleware, imagesToBeVerified);
router.delete('/users/:userId/medias/:mediaId', tokenMiddleware, deleteUserImage);
router.get('/users/toBeNotedProfilesByWeek', tokenMiddleware, imagesToBeVerified);
router.put('/users/:userId/medias/:mediaId/score/:score', tokenMiddleware, verifyImage);
router.put('/users/:userId/medias/:mediaId/paths/:mediaPath/verify/:verified', tokenMiddleware, verifyImage);

module.exports = router;
