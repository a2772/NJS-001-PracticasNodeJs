const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/users')

router.get('/all', usersControllers.getUsers)
router.get('/create', usersControllers.getCreateUser)
router.get('/update', usersControllers.getUpdateUser)
router.get('/delete', usersControllers.getDeleteUser)
router.post('/create', usersControllers.createUser)
router.put('/update/:id', usersControllers.updateUser)
router.delete('/delete/:id', usersControllers.deleteUser)

module.exports = router