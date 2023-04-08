const express = require('express');
const router = express.Router();
const sendInviteController = require('./sendInvite.controller');
const newPageController = require('./newPage.controller');

// Define the route for sending an invite
router.post('/sendInvite', sendInviteController.sendInvite);

// Define the route for the new page
router.get('/newPage', newPageController.newPage);

module.exports = router;
