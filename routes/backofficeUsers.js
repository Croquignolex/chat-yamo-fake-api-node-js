const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/tokenMiddleware");
const {login, logout} = require('../controllers/backofficeUsersController');

router.post('/login', login);
router.post('/logout', tokenMiddleware, logout);

module.exports = router;