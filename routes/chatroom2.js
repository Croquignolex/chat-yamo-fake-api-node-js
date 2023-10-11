const express = require('express');
const router = express.Router();

const {freeChatroomState} = require('../controllers/chatroomController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/:userId/messages/freeChatroomState', tokenMiddleware, freeChatroomState);

module.exports = router;