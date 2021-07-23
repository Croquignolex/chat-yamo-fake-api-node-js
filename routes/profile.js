const express = require('express');
const router = express.Router();

const {details} = require('../controllers/profileController');
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");

router.get('/:userId', tokenMiddleware, details);

module.exports = router;