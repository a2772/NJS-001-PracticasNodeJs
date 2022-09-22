const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const port = 3906
const app = express()
const http = require('http')

//App port
app.set('port', port)

//Middleware
app.use(express.static(path.join(__dirname,'public')))

//Socket
const server = http.createServer(app)
const io = socketio(server)
require('./socket')(io)

//App listening
server.listen(app.get('port'), ()=>{
    console.log(`App running on port ${app.get('port')}`)
})