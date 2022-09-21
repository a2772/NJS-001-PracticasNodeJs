const express = require('express')
const app = express()
const aCon = require('./appConfig')
const conn = require('./models/db/connection')
//const userRoutes = require('./models/collections/users')
const userRoutes = require('./routes/users')

app.set('port', aCon.app.port)

app.use(express.urlencoded({extended:false}))

app.use(userRoutes)

app.listen(app.get('port'),()=>{
    console.log(aCon.app.devMode ? `Aplicación ejecutándose en el puerto ${app.get('port')}` : '')
})