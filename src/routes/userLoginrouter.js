const express  = require('express')
const router = express.Router()
const UserLoginCtrl= require('../controllers/UserLoginControler')

router.post('/crear', UserLoginCtrl.crear)
router.get('/listar', UserLoginCtrl.listar)
router.delete('/eliminar/:id', UserLoginCtrl.eliminar)

router.put('/actualizar/:id', UserLoginCtrl.actualizar)

module.exports = router