const express = require('express');
const router = express.Router();

const {adMatchesCount} = require('../controllers/chatroomController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/backoffice/users/:userId/adMatchesCount', tokenMiddleware, adMatchesCount);

module.exports = router;