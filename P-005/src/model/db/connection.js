const mysql = require('mysql')
const { mySQLDatabase } = require('./config')

const connection = mysql.createConnection(mySQLDatabase)
connection.connect((err,conn)=>{
    if(err){
        console.log('Ha ocurrido un error al conectarse a la DB')
    }else{
        console.log('Conexión exitosa')
        return conn
    }
})

module.exports = connection