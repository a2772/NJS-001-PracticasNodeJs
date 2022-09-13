const getUsers = (req,res)=>{
    res.send('Showing all users')
}
const createUser = (req,res)=>{
    res.send('Create user')
}
const updateUser = (req,res)=>{
    res.send('Update users')
}
const deleteUser = (req,res)=>{
    res.send('Delete users')
}

module.exports = {getUsers, createUser, updateUser, deleteUser}