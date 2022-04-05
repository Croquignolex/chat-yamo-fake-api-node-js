const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {cases, report, userCaseMessages} = require('../controllers/feedbacksController');

router.post('/submit', tokenMiddleware, report);
router.get('/cases/messages/from', tokenMiddleware, cases);
router.get('/:userId/case', tokenMiddleware, userCaseMessages);

module.exports = router;
