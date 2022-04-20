const express  = require('express')
const router = express.Router()
const RegisterCompanyCtrl = require('../controllers/RegisterCompanyController')

router.post('/crear', RegisterCompanyCtrl.crear)
router.get('/listar', RegisterCompanyCtrl.listar)
router.delete('/eliminar/:id', RegisterCompanyCtrl.eliminar)

router.put('/actualizar/:id', RegisterCompanyCtrl.actualizar)

module.exports = router