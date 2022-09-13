const path = require('path')
const rootPath = path.join(__dirname, '../public')

const getUsers = (req,res)=>{
    res.sendFile('users.html', {root: rootPath})
}
const createUser = (req,res)=>{
    res.sendFile('create-user.html', {root: rootPath})
}
const updateUser = (req,res)=>{
    res.sendFile('update-user.html', {root: rootPath})
}
const deleteUser = (req,res)=>{
    res.sendFile('delete-user.html', {root: rootPath})
}

module.exports = {getUsers, createUser, updateUser, deleteUser}