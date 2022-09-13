const express = require('express')
const path = require('path')
const users = require('./routes/users')
const app = express()
const port =  3906
const loggedMiddleware = require('./middlewares/logged')

app.listen(port, ()=>{
    console.log('App running on port: ' + port)
})

///Routes
app.get('/', (req,res)=>{
    res.send('Welcome')
})

///app.use
app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname,'public')))
app.use('/users', users)

