const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {details, search, status} = require('../controllers/usersController');
const {lifeStyle, customerJourney, customerJourney2} = require('../controllers/usersController');

router.get('/:userId', tokenMiddleware, details);
router.post('/:userId', tokenMiddleware, status);
router.get('/v2/:userId', tokenMiddleware, details);
router.get('/backoffice/:userId/metadata', tokenMiddleware, lifeStyle);
router.get('/backoffice/:userId/customerjourney', tokenMiddleware, customerJourney);
router.get('/backoffice/:userId/customerjourneyv2', tokenMiddleware, customerJourney2);
router.post('/backoffice/checkuser', tokenMiddleware, search);

module.exports = router;
