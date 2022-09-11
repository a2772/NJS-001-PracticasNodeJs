const puerto = 3906
const http = require('http')
const server = http.createServer(onRequest)
const fs = require('fs')

server.listen(puerto, ()=>{
    console.log('Mi server está ejecutándose en localhost:'+puerto)
})

function onRequest(req, res){
    console.log('Se ha encontrado una nueva petición y esta es la respuesta')
    fs.readFile('index.html', (error,content)=>{
        if(error){
            switch(error.code){
                case 'ENOENT':
                    res.setStatus = 404
                    console.log('No se ha encontrado el archivo html')
                    break;
                default:
                    res.setStatus = 500
                    console.log('Ha ocurrido un error en el servidor')
                    break;
            }
            console.log(error)
        }else{
            res.setStatus = 202
            res.setHeader('Content-type', 'text/html')
            res.write(content)
            res.end()
        }
    })
}