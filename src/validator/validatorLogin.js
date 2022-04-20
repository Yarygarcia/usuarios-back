const {check} = require('express-validator')
const {validateResult} = require('../helpers/validateHelpers')

const validateLogin = [// correo, passwordUser
    check('idUsuario')
        .exists()
        .not()
        .isEmpty(),
    check('correo')
        .exists()
        .isEmail()
        .not()
        .isEmpty(),
    check('passwordUser')
        .exists()
        .not()
        .isEmpty(),
    (req,res,next)=>{
        validateResult(req,res,next)
    }

]
module.exports= {validateLogin}