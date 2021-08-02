const express = require('express');
const router = express.Router();

const {login} = require('../controllers/authController');
const {logout} = require('../controllers/authController');
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");

router.post('/login', login);
router.post('/logout', tokenMiddleware, logout);
router.post('/profile', tokenMiddleware, profile);

module.exports = router;