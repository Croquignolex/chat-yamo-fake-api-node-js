const express = require('express');
const router = express.Router();

const {metadata, block, souscriptions} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.delete('/user/:userId/block', tokenMiddleware, block);
router.get('/backoffice/user/:userId/metadata', tokenMiddleware, metadata);
router.get('/user/:userId/subscriptionhistory', tokenMiddleware, souscriptions);

module.exports = router;
