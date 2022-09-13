const users = [
    {id: 1, name: 'Nepomuceno', age: 27},
    {id: 2, name: 'John', age: 19},
    {id: 3, name: 'Aitana', age: 30},
    {id: 4, name: 'Zoilo', age: 30}
]

const getUsers = (req,res)=>{
    res.render('users', {users: users})
}
const getCreateUser = (req,res)=>{
    res.render('create-user', {users: users})
}
const getUpdateUser = (req,res)=>{
    res.render('update-user', {users: users})
}
const getDeleteUser = (req,res)=>{
    res.render('delete-user', {users: users})
}
const createUser = (req,res)=>{
    users.push(req.body)
    res.render('users', {users: users})
}
const updateUser = (req,res)=>{
    for(let usrNum = 0; usrNum < users.length; usrNum++){
        if(req.params.id == users[usrNum].id){
            users[usrNum].name = req.body.name
            users[usrNum].age = req.body.age
            break
        }
    }
    res.render('users', {users: users})
}
const deleteUser = (req,res)=>{
    for(let usrNum = 0; usrNum < users.length; usrNum++){
        if(req.params.id == users[usrNum].id){
            users.splice(usrNum,1)
            break
        }
    }
    res.render('users', {users: users})
}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser,
createUser, updateUser, deleteUser}