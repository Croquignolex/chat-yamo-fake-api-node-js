const express = require('express');
const router = express.Router();

const {adMatchesCount, searchFilter} = require('../controllers/chatroomController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/backoffice/users/:userId/adMatchesCount', tokenMiddleware, adMatchesCount);
router.get('/backoffice/profile/:userId/searchFilter', tokenMiddleware, searchFilter);

module.exports = router;