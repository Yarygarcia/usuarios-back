const registerCompanyCtrl = {}
const RegisterCompany = require('../models/registerCompany')
// const models = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


registerCompanyCtrl.crear = async (req,res) =>{
    try {
        //Constantes requeridas del body
        const{idCompany,nameCompany,companyAddress,phoneCompany,billingEmail,country,department,city,idLegalRepresentative, names,lastName,legalRepresentativeAddress,phoneLegalRepresentative,EmailLegalRepresentative} = req.body
        //Constantes necesarias para crear una nueva instancia
        const NewRegisterCompany = new RegisterCompany({
            idCompany,nameCompany,companyAddress,phoneCompany,billingEmail,country,department,city,idLegalRepresentative, names,lastName,legalRepresentativeAddress,phoneLegalRepresentative,EmailLegalRepresentative
        })
        //Buscar un usuario mediante el documento de identidad
        const id_Company = await RegisterCompany.findOne({idCompany: req.body.idCompany})
        if(!id_Company){
            
            //Token
            const token = jwt.sign({idCompany: NewRegisterCompany.idCompany}, 'Secreta')
            //Guardar usuario
            await NewRegisterCompany.save()
            res.json({
                mensaje: 'Nuevo usuario creado',
                idCompany: NewRegisterCompany.idCompany,
                nameCompany: NewRegisterCompany.nameCompany,
                companyAddress: NewRegisterCompany.companyAddress,
                phoneCompany: NewRegisterCompany.phoneCompany,
                billingEmail: NewRegisterCompany.billingEmail,
                country: NewRegisterCompany.country,
                department: NewRegisterCompany.department,
                city: NewRegisterCompany.city,
                idLegalRepresentative: NewRegisterCompany.idLegalRepresentative,
                names: NewRegisterCompany.names,
                lastName: NewRegisterCompany.lastName,
                legalRepresentativeAddress: NewRegisterCompany.legalRepresentativeAddress,
                phoneLegalRepresentative: NewRegisterCompany.phoneLegalRepresentative,
                EmailLegalRepresentative: NewRegisterCompany.EmailLegalRepresentative,
                token
                
            })
        }else{
            res.json({
                mensaje: 'El usuario ya existe'
            })
        }
        
    } catch (error) {
        res.json({
            mensage: error
        })
    }
}

//Listar Compañías
registerCompanyCtrl.listar = async (req,res)=>{
    try {
        const respuesta = await RegisterCompany.find()
        res.json(respuesta)
        
    } catch (err) {
        res.json({
            mensage:err
        })
    }
}

//Eliminar compañías
registerCompanyCtrl.eliminar = async (req,res)=>{

    try {
        const id = req.params.id
        if(!id){
            res.json({
                mensaje: "El item no existe"
            })
        }
        await RegisterCompany.findByIdAndRemove({_id:id})
        res.json({
            mensaje: "Item eliminado"
        })
        
    } catch (err) {
        res.json({
            mensage: err
        })
    }
}

//Actualizar compañías
registerCompanyCtrl.actualizar = async (req,res)=>{
    try {  
        const id = req.params.id
        if(id){
  
          await  RegisterCompany.findByIdAndUpdate({_id:id},req.body)
          res.json({
              mensaje: "Item actualizado"
          })
          
        }
        
          res.json({
              mensaje: "Item no existe"
          })
        
       
      } catch (err) {
          res.json({
              mensaje:'error' + err
          })
      }
}


module.exports = registerCompanyCtrl