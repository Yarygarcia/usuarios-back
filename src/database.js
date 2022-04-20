//Parametros de conexión de la base de datos.

const mongoose = require('mongoose')

URI =('mongodb+srv://yary_garciaq:bUtUUauXcAyXgTpJ.ñ@cluster0.asnuf.mongodb.net/integralmente')
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("Conectado a la base de datos: ", db.connection.name))
.catch((err) => err)

//Exportar

module.exports = mongoose
