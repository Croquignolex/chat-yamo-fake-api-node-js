const express = require('express');
const router = express.Router();

const {tokenMiddleware} = require("../middlewares/accessTokenMiddleware");
const {cases, report, userCaseMessages, roles} = require('../controllers/feedbacksController');
const {backofficeUsers, deleteBackofficeUser} = require('../controllers/backofficeUsersController');
const {imagesToBeVerified} = require('../controllers/validationController');

router.get('/backoffice/allroles', roles);
router.post('/submit', tokenMiddleware, report);
router.get('/cases/messages/from', tokenMiddleware, cases);
router.get('/:userId/case', tokenMiddleware, userCaseMessages);
// Backoffice users
router.get('/backoffice/:backofficeUserId/allusers', tokenMiddleware, backofficeUsers);
router.delete('/backoffice/:backofficeUserId/:userId/delete', tokenMiddleware, deleteBackofficeUser);
router.get('/backoffice/profilesToDoubleCheck', tokenMiddleware, imagesToBeVerified);
// /feedbacks/backoffice/profilesToDoubleCheck

module.exports = router;
