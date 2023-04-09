const express = require('express');
const router = express.Router();
const sendInvite = require('./userInvite.controller');


// Define the route for sending an invite
router.post('/sendInvite', sendInvite.sendInvite);



module.exports = router;
