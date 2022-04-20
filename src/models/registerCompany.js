const mongoose = require('mongoose');
const { Schema } = mongoose;


const registerCompanySchema = new Schema({

    //Company
    //Tipo de documento de identidad de la empresa,  ***ME FALTA****************************
    idCompany:{
        type: Number,
        unique: true,
        required :[true, "Por favor ingresa la identificación de la compañia"],
        maxlength: [1000, "identificación de la compañia: máximo 150 caracteres"],
        minlength: [3, "identificación de la compañia: mínimo 3 caracteres"]
      },
    nameCompany:{
        type: String,
        required :[true, "Por favor ingresa el nombre de la compañia"],
        maxlength: [150, "nombre de la compañia: máximo 150 caracteres"],
        minlength: [3, "nombre de la compañia: mínimo 3 caracteres"]
      },
      companyAddress:{
        type: String,
        required :[true, "Por favor ingresa la dirección en donde está situada la compañia"],
        maxlength: [150, "dirección de la compañia: máximo 150 caracteres"],
        minlength: [3, "dirección de la compañia: mínimo 3 caracteres"]
      },
      phoneCompany:{
        type: Number,
        required :[true, "Por favor ingresa un telefono de la compañia"],
        maxlength: [1000, "telefono compañia: máximo 150 caracteres"],
        minlength: [0, "telefono compañia:  mínimo 3 caracteres"]  
      },
      billingEmail:{
        type: String,
        required :[true, "Por favor ingresa un correo de cobro "],
        maxlength: [1000, "correo de cobro: máximo 150 caracteres"],
        minlength: [0, "correo de cobro: mínimo 3 caracteres"]  
      },
      country:{
        type: String,
        required :[true, "Por favor ingresa el país en la que se encuentra la compañia"],
        maxlength: [1000, "país de la compañia: máximo 150 caracteres"],
        minlength: [0, "país de la compañia: mínimo 3 caracteres"]  
      },
      department:{
        type: String,
        required :[true, "Por favor ingresa el departamento en el que se encuentra la compañia"],
        maxlength: [1000, "departamento de la compañia: máximo 150 caracteres"],
        minlength: [0, "departamento de la compañia: mínimo 3 caracteres"]  
      },
      city:{
        type: String,
        required :[true, "Por favor ingresa la ciudad en la que se encuentra la compañia"],
        maxlength: [1000, "ciudad de la compañia: máximo 150 caracteres"],
        minlength: [0, "ciudad de la compañia: mínimo 3 caracteres"]  
      },
      //Representante legal de la Compañia
      //Tipo de documento del representante legal ***ME FALTA*******************************
      idLegalRepresentative:{
        type: Number,
        required :[true, "Por favor ingresa la identificación del representante legal de la compañia"],
        maxlength: [1000, "representante legal de la compañia: máximo 150 caracteres"],
        minlength: [0, "representante legal de la compañia: mínimo 3 caracteres"]  
      },
      names:{
        type: String,
        required :[true, "Por favor ingresa el nombre completo del  representante legal de la compañia"],
        maxlength: [1000, "nombres de repesentante legal: máximo 150 caracteres"],
        minlength: [0, "nombres de repesentante legal: mínimo 3 caracteres"]  
      },
      lastName:{
        type: String,
        required :[true, "Por favor ingresa los apellido del representante legal de la compañia"],
        maxlength: [1000, "apellido del representante legal: máximo 150 caracteres"],
        minlength: [0, "apellido del representante legal: mínimo 3 caracteres"]  
      },
      legalRepresentativeAddress:{
        type: String,
        required :[true, "Por favor ingresa la dirección del representante legal de la compañia "],
        maxlength: [1000, "dirección representante legal: máximo 150 caracteres"],
        minlength: [0, "dirección representante legal: mínimo 3 caracteres"]  
      },
      phoneLegalRepresentative:{
        type: Number,
        required :[true, "Por favor ingresa el telefono del  representante legal de la compañia"],
        maxlength: [1000, "telefono del  representante legal: máximo 150 caracteres"],
        minlength: [0, "telefono del  representante legal: mínimo 3 caracteres"]  
      },
      EmailLegalRepresentative:{
        type: String,
        required :[true, "Por favor ingresa el correo del representante legal de la compañia"],
        maxlength: [1000, "el correo del representante legal: máximo 150 caracteres"],
        minlength: [0, "el correo del representante legal: mínimo 3 caracteres"]  
      },

      //Carga de archivo de la empresa
            //Rut
            //Camara de comercio
            //Cedula de repesentate legal de la compañia

            
      //Si se va a implementar la fecha
      date: {
        type: Date,
        default: Date.now
      },
 
})
//Convertir a modelo, ya que es un modelo y exportarlo
const RegisterCompany = mongoose.model('register_company', registerCompanySchema );

module.exports = RegisterCompany;