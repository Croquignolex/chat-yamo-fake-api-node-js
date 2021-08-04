const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {backofficeUserNewMessage} = require('../controllers/chatroomController');

router.post('/:backofficeUserid/:userId/newmessage', tokenMiddleware, backofficeUserNewMessage);

module.exports = router;