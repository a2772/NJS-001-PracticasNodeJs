const useCon = require('./config')
const mysql = require('mysql')
const mongoose = require('mongoose')
const { mySQLDatabase } = require('./config')
const { mongoDB } = require('./config')

if(useCon.conType === 'mysql'){
    const connection = mysql.createConnection(mySQLDatabase)
    connection.connect((err,conn)=>{
        if(err){
            console.log(`Ha ocurrido un error al conectarse a la DB ${err}`)
        }else{
            console.log('Conexión exitosa con mysql')
            return conn
        }
    })
    module.exports = connection
}else{
    const connection = mongoose.connect(`mongodb://${mongoDB.host}:${mongoDB.port}/${mongoDB.database}`)
    .then((db)=>{
        console.log('Conexión exitosa con mongo')
    }).catch((err)=>{
        console.log(`Ha ocurrido un error ${err}`)
    })
    module.exports = connection
}