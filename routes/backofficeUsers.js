const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {login, logout, profile} = require('../controllers/backofficeUsersController');

router.post('/login', login);
router.post('/logout', tokenMiddleware, logout);
router.get('/profile', tokenMiddleware, profile);

module.exports = router;