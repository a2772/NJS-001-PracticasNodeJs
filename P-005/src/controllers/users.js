const connection = require('../model/db/connection')
const conMeth = require('../model/db/config')
const User = require('../model/user/users')

const getUsers = (req,res)=>{
    if(conMeth.conType === 'mysql'){
        const sql = 'SELECT * FROM users;'
        connection.query(sql, (err,result)=>{
            if(err){
                console.log('Ha ocurrido un error select')
            }else{
                console.log(result)
                res.render('users', {users: result})
            }
        })
    }else{
        User.find({}, (err,result)=>{
            if(err){
                console.log('Ha ocurrido un error select')
            }else{
                console.log(result)
                res.render('users', {users: result})
            }
        })
    }
}
const getCreateUser = (req,res)=>{
    res.render('create-user')
}
const getUpdateUser = (req,res)=>{
    if(conMeth.conType === 'mysql'){
        const param = req.params.id
        const qry = 'SELECT * FROM users WHERE id=?'
        connection.query(qry,param,(err,result)=>{
            if(err){
                console.log('Ha ocurrido un error: ' + err)
            }else{
                console.log(result)
                res.render('update-user',{user:result})
            }
        })
    }else{
        const param = req.params.id
        User.find({_id: param}, (err,result)=>{
            if(err){
                console.log('Ha ocurrido un error update')
            }else{
                console.log(result)
                res.render('update-user', {user: result})
            }
        })
    }
}
const getDeleteUser = (req,res)=>{
    if(conMeth.conType === 'mysql'){    
        const param = req.params.id
        const qry = 'SELECT * FROM users WHERE id=?'
        connection.query(qry,param,(err,result)=>{
            if(err){
                console.log('Ha ocurrido un error: ' + err)
            }else{
                console.log(result)
                res.render('delete-user',{user:result})
            }
        })
    }else{
        const param = req.params.id
        User.find({_id: param}, (err,result)=>{
            if(err){
                console.log('Ha ocurrido un error delete')
            }else{
                console.log(result)
                res.render('delete-user', {user: result})
            }
        })
    }
}
const createUser = (req,res)=>{
    if(conMeth.conType === 'mysql'){        
        const qry = 'INSERT INTO users SET ? '
        const data = req.body
        connection.query(qry,data,(err,result)=>{
            if(err){
                console.log('Ha ocurido un error')
            }else{
                console.log('Usuario registrado')
                res.redirect('/users/all')
            }
        })
    }else{
        const data = req.body
        const user = new User({
            name: data.name,
            age: data.age
        })
        user.save((err,result)=>{
            if(err){
                console.log('Ha ocurido un error')
            }else{
                console.log('Usuario registrado')
                res.redirect('/users/all')
            }
        })
    }
}
const updateUser = (req,res)=>{
    if(conMeth.conType === 'mysql'){
        const param = req.params.id
        const qry = `UPDATE users SET name='${req.body.name}', age='${req.body.age}' WHERE id=${param}`
        connection.query(qry,(err,result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
                console.log('Usuario actualizado')
                res.redirect('/users/all')
            }
        })
    }else{
        const param = req.params.id
        const data = req.body
        User.findOneAndUpdate({_id:param}, data, (err,result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
                console.log('Usuario actualizado')
                res.redirect('/users/all')
            }
        })
    }
}
const deleteUser = (req,res)=>{
    if(conMeth.conType === 'mysql'){    
        const param = req.params.id
        const qry = `DELETE FROM users WHERE id=${param}`
        connection.query(qry,(err,result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
                console.log('Usuario Eliminado')
                res.redirect('/users/all')
            }
        })
    }else{
        const param = req.params.id
        User.deleteOne({_id: param},  (err,result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
                console.log('Usuario Eliminado')
                res.redirect('/users/all')
            }
        })
    }
}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser,
createUser, updateUser, deleteUser}