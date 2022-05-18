const express = require('express');
const router = express.Router();

const {details, search} = require('../controllers/usersController');
const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");

router.get('/:userId', tokenMiddleware, details);
router.post('/backoffice/checkuser', tokenMiddleware, search);

module.exports = router;
