const express = require('express');
const router = express.Router();

const {metadata, block, blockState, souscriptions, history, status} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.delete('/user/:userId/block', tokenMiddleware, block);
router.get('/backoffice/user/:userId/status', tokenMiddleware, status);
router.get('/user/:userId/userblockedstate', tokenMiddleware, blockState);
router.get('/backoffice/user/:userId/metadata', tokenMiddleware, metadata);
router.get('/backoffice/user/:userId/statusreason', tokenMiddleware, history);
router.get('/user/:userId/subscriptionhistory', tokenMiddleware, souscriptions);
router.post('/backoffice/user/:userId/activatesubscription', tokenMiddleware, block);

module.exports = router;