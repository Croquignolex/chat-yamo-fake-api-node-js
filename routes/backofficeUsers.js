const express = require('express');
const router = express.Router();

const {login, password} = require('../controllers/backofficeUsersController');

router.post('/login', login);
router.post('/:backofficeUserId/changepasswd', password);

module.exports = router;
