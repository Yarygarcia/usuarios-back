//Se requiere las dependencias necesarias. 
const express = require('express')
// /*.*/const hbs = require('express-handlebars')
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')



//Requerir la db
require('./database')

//Configurar el puerto
app.set('Port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

// /*.*/app.engine('.hbs', hbs({
//     defaultLayout: 'default',
//     extname: '.hbs'
// /*.*/}))

//Ruta del router
app.use('/user', require('./routes/userrouter'))

app.use('/login', require('./routes/userLoginrouter'))
app.use('/company', require('./routes/registerCompanyrouter'))


app.listen(app.get('Port'), ()=>{
    console.log("Escuchando en el puerto:", app.get('Port'))
})
