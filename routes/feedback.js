const express = require('express');
const router = express.Router();

const {messages} = require('../controllers/feedbackController');
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");

router.post('/cases/messages', tokenMiddleware, messages);

module.exports = router;