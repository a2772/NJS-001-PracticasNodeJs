const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/users')

router.get('/all', usersControllers.getUsers)
router.get('/create', usersControllers.getCreateUser)
router.get('/update/:id', usersControllers.getUpdateUser)
router.get('/delete/:id', usersControllers.getDeleteUser)
router.post('/create', usersControllers.createUser)
router.post('/update/:id', usersControllers.updateUser)
router.post('/delete/:id', usersControllers.deleteUser)

module.exports = router