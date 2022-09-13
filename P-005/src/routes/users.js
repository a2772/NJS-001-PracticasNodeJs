const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/users')

router.get('/all', usersControllers.getUsers)
router.get('/create', usersControllers.createUser)
router.get('/update', usersControllers.updateUser)
router.get('/delete', usersControllers.deleteUser)

module.exports = router