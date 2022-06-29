const express = require('express');
const router = express.Router();

const {metadata, souscriptions} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/backoffice/user/:userId/metadata', tokenMiddleware, metadata);
router.get('/user/:userId/subscriptionhistory', tokenMiddleware, souscriptions);

module.exports = router;
