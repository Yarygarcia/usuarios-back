const {check} = require('express-validator')
const {validateResult} = require('../helpers/validateHelpers')

const validateRegister = [//nombres,apellidos,idUsuario,telefono,correo,username,passwordUser
    check('nombres')  
        .exists()
        .not()
        .isEmpty(),
    check('apellidos')
    .exists()
    .not()
    .isEmpty(),
    check('idUsuario')
        .exists()
        .not()
        .isEmpty(),
    check('telefono')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('correo')
        .exists()
        .isEmail()
        .not()
        .isEmpty(),
    check('username')
        .exists()
        .not()
        .isEmpty(),
    check ('passwordUser')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min:6}),
    check('company')
        .exists()
        .not()
        .isEmpty(),
    // falta esta validación*******************************
    (req,res,next)=>{
        validateResult(req,res,next)
    }
]
// ,[
//     check('doc').custom(async(doc = 'Cedula_Colombiana') =>{
//         const existeDoc = await document_users.findOne({doc});
//         if(!existeDoc){
//             throw new Error(`El documento de identidad ${doc} no es valido`)
//         }
//     })
// ]
module.exports= {validateRegister}