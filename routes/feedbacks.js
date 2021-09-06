const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {cases, userCaseMessages} = require('../controllers/feedbacksController');

router.get('/cases/messages', tokenMiddleware, cases);
router.get('/:userId/case', tokenMiddleware, userCaseMessages);

module.exports = router;