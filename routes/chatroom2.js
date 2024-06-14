const express = require('express');
const router = express.Router();

const {freeChatroomState, activeChatRooms} = require('../controllers/chatroomController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/:userId/messages/freeChatroomState', tokenMiddleware, freeChatroomState);
router.get('/backoffice/users/:userId/activeChatRooms', tokenMiddleware, activeChatRooms);

module.exports = router;