const express = require('express');
const router = express.Router();

const {appData} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/:userId/notificationContext', tokenMiddleware, appData);

module.exports = router;