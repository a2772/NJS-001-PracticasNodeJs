var requests = 0
const port = 3906
const http = require('http')
const server = http.createServer(onRequest)
const fs = require('fs')
const qs = require('querystring')

server.listen(port, ()=>{
    console.log('Server listening at localhost:'+port)
})

function onRequest(req,res){
    //Mostramos mensaje de que se ha recibido una petición
    console.log(requests + ' Request received')
    requests++
    //Según el tipo de url en la que se encuentre, ejecutamos una acción en específico
    if(req.url == '/'){
        //Manejo de los errores para el archivo index.html
        fs.readFile('index.html', (error,content)=>{
            if(error){
                switch(error.code){
                    case 'ENOENT':
                        res.setStatus = 404
                        console.log('HTML file not found')
                        break;
                    default:
                        res.setStatus = 500
                        console.log('Server error')
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
    }else if(req.url = '/users'){
        if(req.method == 'GET'){
            res.setStatus = 200
            res.setHeader('Content-type', 'text/html')
            res.write('<h2>Reaching users (GET)</h2>')
            res.end()
        }if(req.method == 'POST'){
            let datos = ''
            req.on('data', (d)=>{
                datos += d
            })
            req.on('end', ()=>{
                let post = qs.parse(datos)
                res.end("Data received (POST): " + post.name)
            })
        }if(req.method == 'PUT'){
            let datos = ''
            req.on('data', (d)=>{
                datos += d
            })
            req.on('end', ()=>{
                let post = qs.parse(datos)
                res.end("Data received (PUT): " + post.name)
            })
        }if(req.method == 'DELETE'){
            let datos = ''
            req.on('data', (d)=>{
                datos += d
            })
            req.on('end', ()=>{
                let post = qs.parse(datos)
                res.end("Data received (DELETE): " + post.name)
            })
        }
    }
}