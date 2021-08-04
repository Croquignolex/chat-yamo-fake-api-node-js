const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {messages, userCase} = require('../controllers/messagesController');

router.get('/:userId/case', tokenMiddleware, userCase);
router.get('/cases/messages', tokenMiddleware, messages);

module.exports = router;