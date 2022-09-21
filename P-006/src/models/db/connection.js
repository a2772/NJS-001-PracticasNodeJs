const useCon = require('./config')
const aCon = require('../../appConfig')

const mongoose = require('mongoose')
const { mongoDB } = require('./config')

const mysql = require('mysql')
const { mySQLDatabase } = require('./config')

if(useCon.conType === 'mysql'){
    const connection = mysql.createConnection(mySQLDatabase)
    connection.connect((err,conn)=>{
        if(err){
            console.log(`Ha ocurrido un error al conectarse a la DB ${err}`)
        }else{
            console.log(aCon.app.devMode ? 'Conexión exitosa con mysql' : '')
            return conn
        }
    })
    module.exports = connection
}else{
    const connection = mongoose.connect(`mongodb://${mongoDB.host}:${mongoDB.port}/${mongoDB.database}`)
    .then((db)=>{
        console.log(aCon.app.devMode ? 'Conexión exitosa con mongo' : '')
    }).catch((err)=>{
        console.log(`Ha ocurrido un error ${err}`)
    })
    module.exports = connection
}