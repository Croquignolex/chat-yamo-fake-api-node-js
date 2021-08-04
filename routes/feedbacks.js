const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {cases, messages, userCaseMessages} = require('../controllers/feedbacksController');

router.get('/cases', tokenMiddleware, cases);
router.get('/cases/messages', tokenMiddleware, messages);
router.get('/:userId/case', tokenMiddleware, userCaseMessages);

module.exports = router;