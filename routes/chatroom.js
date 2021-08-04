const express = require('express');
const router = express.Router();

const {newMessage} = require('../controllers/chatroomController');
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");

router.post('/:backofficeUserid/:userId/newmessage', tokenMiddleware, newMessage);

module.exports = router;