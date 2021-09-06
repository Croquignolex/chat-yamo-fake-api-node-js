const express = require('express');
const router = express.Router();

const {newMessage} = require('../controllers/chatroomController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.post('/:userId/:backofficeUserid/newmessage', tokenMiddleware, newMessage);

module.exports = router;