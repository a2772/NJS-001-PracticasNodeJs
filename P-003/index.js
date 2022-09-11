let puerto = 3906
const http = require('http')
const server = http.createServer(onRequest)
server.listen(puerto, ()=>{
    console.log('Mi server está ejecutándose en localhost:'+puerto)
})

function onRequest(req, res){
    console.log('Se ha encontrado una nueva petición y esta es la respuesta')
    //res.setHeader('Content-type', 'text/plain')
    res.setHeader('Content-type', 'text/html')
    res.write('<h1>Bienvenido a Node.js</h1>')
    res.write('<p>Bienvenido a Node.js</p>')
    res.end()
}