const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const aCon = require('../appConfig')
const User = require('../models/collections/users')

const getAdmin = (req,res)=>{
    jwt.verify(req.token, aCon.crypt.tkn1, (err, userData)=>{
        if(err){
            res.send('Ha ocurrido un error')
        }else{
            res.json({
                message: 'Datos correctos',
                userData: userData
            })
        }
    })
}
const login = (req,res)=>{
    let procede = true
    User.findOne({email: req.body.email}, (err, result)=>{
        if(err){
            res.send(`Ha ocurrido un error ${aCon.app.devMode ? err : ''}`)
            procede = false
        }
        if(procede){
            if(!result){
                res.send(`Usuario NO encontrado`)
                procede = false
            }
        }
        if(procede){
            if(!bcrypt.compareSync(req.body.pass, result.pass)){
                res.send(`Contraseña incorrecta`)
                procede = false
            }
        }
        if(procede){
            //Usuario y contraseña válidos: res.send(`Usuario encontrado, credenciales válidas ${aCon.app.devMode ? result : ''}`)
            jwt.sign({user: result}, aCon.crypt.tkn1,(err,token)=>{
                res.send({token:token})
            })
        }
    })
}
const register = (req,res)=>{
    const user = new User({
        name: req.body.name, 
        email: req.body.email,
        pass: bcrypt.hashSync(req.body.pass, 10)
    })
    user.save((err,result)=>{
        if(err){
            res.send(`Error al registrar ${aCon.app.devMode ? err : '' }`)
        }else{
            res.send(`Registro correcto ${aCon.app.devMode ? result : '' }`)
        }
    })
}
module.exports = {getAdmin, login, register}