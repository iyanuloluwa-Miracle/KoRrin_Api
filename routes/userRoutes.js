const express = require('express')
const userController = require('../controller/userController')


const router = express.Router()

router.post("/sendInvite", userController.sendInvite)
router.get("/newPage", userController.newPage)

module.exports = router