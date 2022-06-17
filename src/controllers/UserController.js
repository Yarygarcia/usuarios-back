const userCtrl = {}
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// const { validationResult } =  require('express-validator')


//Crear usuario
userCtrl.crear = async (req,res) =>{
    try {
        //Constantes requeridas del body
        const{nombres,apellidos,idUsuario,telefono,correo,username,passwordUser,company} = req.body
        //Constantes necesarias para crear una nueva instancia
        const NewUser = new User({
            nombres,apellidos,idUsuario,telefono,correo,username,passwordUser,company
        })
        //Buscar un usuario mediante el documento de identidad
        const idUser = await User.findOne({idUsuario: req.body.idUsuario})
        const userName = await User.findOne({username: username})
        if(idUser || userName){
            res.json({
                mensage: "Este usuario ya existe"
            })

        }else{
            //Encriptaciòn de la password
            NewUser.passwordUser= await bcrypt.hash(passwordUser, 10)
            //Token
            const token = jwt.sign({idUsuario: NewUser.idUsuario}, 'Secreta')
            //Guardar usuario
            await NewUser.save()
            res.json({
                mensage: 'Nuevo usuario creado',
                nombres: NewUser.nombres,
                apellidos: NewUser.apellidos,
                idUsuario: NewUser.idUsuario,
                telefono: NewUser.telefono,
                correo: NewUser.correo,
                username: NewUser.username,
                passwordUser: NewUser.passwordUser,
                company: NewUser.company,
                token
                
            })
        
        }
        
    } catch (err) {
        res.json({
            mensage: err
        })
    }
    
}
userCtrl.login = async(req,res)=>{
    try {
        // Vañidación de que existe las siguoentes constantes
        const {idUsuario, passwordUser,correo} = req.body
        const admin = await User.findOne({idUsuario:idUsuario})
        const email = await User.findOne({correo: correo})
        if(!admin || !email){
            return res.json({
                mensage: "Identificación o correo incorrecto"
            })
        }
        const match = await bcrypt.compare(passwordUser, admin.passwordUser)
        if(match){
            const token = jwt.sign({idUsuario: admin.idUsuario}, 'Secreta')
            res.json({
                mensage: "Has iniciado sesión",
                //Campos requeridos para iniciar sección
                idUsuario: admin.idUsuario,
                correo: admin.correo,
                passwordUser: admin.passwordUser,
                token
            })
            
        }
        else{
            res.json({
                mensage: "Contraseña incorrecta"
            })
        }
        
        
    } catch (err) {
        console.log(err)        
    }

}
// userCtrl.forgot_password = async(req,res)=>{
//     try {
//         const {correo} = req.body
//         const email = await User.findOne({correo: correo})
//         if(!email){
//             res.jsnon({
//                 mensage: "Usuario no valido"
//             })
//         }
//         const token = jwt.sign({idUsuario: NewUser.idUsuario}, 'Secreta');
//         const data = {
//             from: "noreply@hello.com",
//             to: email,
//             subject: "Restablecercontraseña",
//             html: ""
//         }
        // const message = "Te enviamos un link a tu correo para restablecer la contraseña";
        // let verificationLink;
        // let emailStatus = "Ok";
        // const userRepository = getRepository(idUsuario)
//     } catch (error) {
        
//     }
// }
//***************Desdee el area administrativa***************

//Listar Usuarios 
userCtrl.listar = async (req,res)=>{
    try {
        const respuesta = await User.find()
        
        res.json(respuesta)
        
    } catch (err) {
        res.json({
            mensage:err
        })
    }
}

//Eliminar usuarios 
userCtrl.eliminar = async (req,res)=>{

    try {
        const id = req.params.id
        if(!id){
            res.json({
                mensage: "El item no existe"
            })
        }
        await  User.findByIdAndRemove({_id:id})
        res.json({
            mensage: "Item eliminado"
        })
        
    } catch (err) {
        res.json({
            mensage: err
        })
    }
}

//Actualizar usuarios
userCtrl.actualizar = async (req,res)=>{
    try {  
        const id = req.params.id
        if(id){
  
          await  User.findByIdAndUpdate({_id:id},req.body)
          res.json({
              mensage: "Item actualizado"
          })
          
        }else{
            res.json({
                mensage: "Item no existe"
            })
         
        }

      } catch (err) {
          res.json({
              mensage:'error' + err
          })
      }
}


module.exports = userCtrl