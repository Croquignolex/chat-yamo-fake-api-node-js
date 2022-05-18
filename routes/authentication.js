const express = require('express');
const router = express.Router();

const {metadata} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/backoffice/user/:userId/metadata', tokenMiddleware, metadata);

module.exports = router;
