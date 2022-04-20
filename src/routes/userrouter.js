const express  = require('express')
const router = express.Router()
// const {check} = require('express-validator')
const {validateLogin} = require('../validator/validatorLogin')
const {validateRegister} = require('../validator/validatorRegister')
// const document_users = require('../models/documentouser')
const UserCtrl = require('../controllers/UserController')
// const registerCompanyCtrl = require('../controllers/RegisterCompanyController')

// registrar
router.post('/register',validateRegister,UserCtrl.crear)
// Logueo
router.post('/login',validateLogin,UserCtrl.login)

//Recuperar password
// router.put('/forgot_password',UserCtrl.forgot_password)
// Desde la administración
router.get('/listar', UserCtrl.listar)
router.get('/hh', (req,res)=>{
    res.render(login)
})
router.delete('/eliminar/:id', UserCtrl.eliminar)
router.put('/actualizar/:id',UserCtrl.actualizar)

module.exports = router