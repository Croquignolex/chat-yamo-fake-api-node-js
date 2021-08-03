const express = require('express');
const router = express.Router();

const {details, users} = require('../controllers/profileController');
const {tokenMiddleware} = require("../middlewares/tokenMiddleware");

router.get('/users', tokenMiddleware, users);
router.get('/:userId', tokenMiddleware, details);

module.exports = router;