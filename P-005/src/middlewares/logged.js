const isLogged = (req,res,next)=>{
    let logged = true
    if(logged){
        next()
    }else{
        res.send('User not logged yet, try signing in')
    }
}

exports.isLogged = isLogged