const userLoginCtrl = {}
const UserLogin = require('../models/userLogin')
// const models = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Crear usuario
userLoginCtrl.crear = async (req,res) =>{

    try {
        // Constantes requeridas del body
        const{nombres,apellidos,idUsuario,correo,username,passwordUser} = req.body
        // Constantes necesarias para crear una nueva instancia
        const NuevoUsuario = new UserLogin({
            nombres,apellidos,idUsuario,correo,username,passwordUser
        })
        // Buscar un usuario mediante el documento de identidad
        const idUserLogin = await UserLogin.findOne({idUsuario: req.body.idUsuario})
        if(!idUserLogin){
            // Encriptaciòn de la password
            NuevoUsuario.passwordUser= await bcrypt.hash(passwordUser, 10)
            // Token
            const token = jwt.sign({idUsuario: NuevoUsuario.idUsuario}, 'Secreta')
            // Guardar usuario
            await NuevoUsuario.save()
            res.json({
                mensaje: 'Nuevo usuario creado',
                nombres: NuevoUsuario.nombres,
                apellidos: NuevoUsuario.apellidos,
                idUsuario: NuevoUsuario.idUsuario,
                correo: NuevoUsuario.correo,
                username: NuevoUsuario.username,
                passwordUser: NuevoUsuario.passwordUser,
                token
                
            })
        }else{
            res.json({
                mensaje: 'El usuario ya existe'
            })
        }
        
    } catch (error) {
        res.json({
            mensage: "kjj"+ error
        })
    }

}

//Listar usuarios
userLoginCtrl.listar = async (req,res) =>{
    try {
        const respuesta = await UserLogin.find()
        res.json(respuesta)
    } catch (error) {
        res.json({
            mensage:error
        })
    }
}

//Eliminar usuario
userLoginCtrl.eliminar = async(req,res) =>{
    try {
        const id = req.params.id
        if (!id) {
            res.json({
                mensage: "El usuario no existe"
            })
            
        } await UserLogin.findByIdAndRemove({_id:id})
        res.json({
            mensage: "Usuario eliminado"
        })
    } catch (error) {
        res.json({
            mensage: "error"
        })
        
    }
}

//Actualizar usuario
userLoginCtrl.actualizar = async(req,res) =>{
    try {
        const id = req.params.id
        if(!id){
            res.json({
                mensage: "Usuario no existe"
            })
        } await UserLogin.findByIdAndUpdate({_id:id}, req.body)
            res.json({
                mensage: "Usuario Actualizado"
            })
    } catch (error) {
        res.json({
            mensage:"error " + error  
        })
    }
}



module.exports = userLoginCtrl