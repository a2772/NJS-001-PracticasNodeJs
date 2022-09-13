const express = require('express')
const path = require('path')
const users = require('./routes/users')
const app = express()
const port =  3906
const loggedMiddleware = require('./middlewares/logged')

//app.set (settings)
app.set('title', 'App made with Node.js')
app.set('port', port)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(app.get('port'), ()=>{
    console.log(app.get('title') + '. Running on port: ' + app.get('port'))
})

///Routes
app.get('/', (req,res)=>{
    res.render('index')
})

///app.use
app.use(loggedMiddleware.isLogged)
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/users', users)

