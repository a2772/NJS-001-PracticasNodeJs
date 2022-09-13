const users = [
    {id: 1, name: 'Nepomuceno', age: 27},
    {id: 2, name: 'John', age: 19},
    {id: 3, name: 'Aitana', age: 30}
]

const getUsers = (req,res)=>{
    res.render('users', {users: users})
}
const createUser = (req,res)=>{
    res.render('create-user', {users: users})
}
const updateUser = (req,res)=>{
    res.render('update-user', {users: users})
}
const deleteUser = (req,res)=>{
    res.render('delete-user', {users: users})
}

module.exports = {getUsers, createUser, updateUser, deleteUser}