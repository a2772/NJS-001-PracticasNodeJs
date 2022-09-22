module.exports = (io)=>{
    var messages = []
    io.on('connection', (socket)=>{
        console.log(`The file 'Socket' has ben loaded`)
        socket.broadcast.emit('user_joined','Se ha conectado un nuevo usuario')
        io.emit('messages',messages)

        //Eventos durante la conexión
        socket.on('writing',(username)=>{
            socket.broadcast.emit('writing',username)
        })
        socket.on('message',(data)=>{
            messages.push(data)
            io.emit('messages',messages)
        })
        socket.on('disconnect',()=>{
            console.log(`El usuario se ha desconectado`)
        })
    })
}