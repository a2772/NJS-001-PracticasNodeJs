const verifyToken = (req,res,next)=>{
    let authorization = true
    let token = ''
    console.log('Accediendo al middleware')
    const authorizationHeader = req.headers['authorization']
    if(authorizationHeader === undefined){
        authorization = false
        console.log('No se ha ingresado ningún token')
    }
    if(authorization){
        token = authorizationHeader.split(' ')[1]
        req.token = token
    }else{
        req.token = ''
    }
    next()
}
module.exports = verifyToken