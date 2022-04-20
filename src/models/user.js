const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerCompanyUserSchema = new Schema({
    
  //Tipo de documento de identidad del usuario,  ******ME FALTA**********************

    nombres:{
        type: String,
        required :[true, "Por favor ingresa información al campo de nombres"],
        maxlength: [150, "nombres: máximo 150 caracteres"],
        minlength: [3, "nombres: mínimo 3 caracteres"]
      },
      apellidos:{
        type: String,
        required :[true, "Por favor ingresa información al campo de apellidos"],
        maxlength: [150, "apellidos: máximo 150 caracteres"],
        minlength: [3, "apellidos: mínimo 3 caracteres"]
      },
      doc:{
        type: String,
        required: true,
        // op: ["Cedula_Colombiana", "Cedula_Extranjera", "Nit"]
      },
      idUsuario:{
        type: Number,
        unique: true,
        required :[true, "Por favor ingresa un documento de identidad del usuario"],
        maxlength: [1000, "identificación del usuario: máximo 150 caracteres"],
        minlength: [3, "identificación del usuario: mínimo 3 caracteres"]
      },
      telefono:{
        type: Number,
        required :[true, "Por favor ingresa un telefono"],
        maxlength: [1000, "telefono: máximo 150 caracteres"],
        minlength: [0, "telefono:  mínimo 3 caracteres"]  
      },
      correo:{
        type: String,
        required :[true, "Por favor ingresa un email"],
        maxlength: [1000, "correo: máximo 150 caracteres"],
        minlength: [0, "correo:  mínimo 3 caracteres"]  
      },

      username:{
        type: String,
        unique: true,
        required :[true, "Por favor ingresa un username"],
        maxlength: [1000, "username: máximo 150 caracteres"],
        minlength: [0, "username: mínimo 3 caracteres"]  
      },
      passwordUser:{
        type: String,
        required :[true, "Por favor ingresa una contraseña"],
        maxlength: [1000, "contraseña: máximo 150 caracteres"],
        minlength: [0, "contraseña: mínimo 3 caracteres"]  
      },
      company:{
        type: String,
        required :[true, "Por favor ingresa una compañia"],
        maxlength: [1000, "compañia: máximo 150 caracteres"],
        minlength: [0, "compañia: mínimo 3 caracteres"]  
      },
      //Si se va a implementar la fecha
      date: {
        type: Date,
        default: Date.now
      },
 
})
//Convertir a modelo, ya que es un modelo y exportarlo
const RegisterCompanyUser = mongoose.model('register_company_user', registerCompanyUserSchema);

module.exports = RegisterCompanyUser;