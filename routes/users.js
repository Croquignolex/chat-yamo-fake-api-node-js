const express = require('express');
const router = express.Router();

const {details} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/:userId', tokenMiddleware, details);

module.exports = router;