'use strict'

const { check } = require('express-validator');
const { crearUsuario, revalidarToken, loginUsuario, login } = require('../controllers/user.controller');
var express = require('express');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')
var api = express.Router();

console.log('aa');
// Crear un nuevo usuario
// api.post('/new', crearUsuario);


// Login de usuario
api.post('/login', login);
api.get('/aa', (req, res) => {
    console.log('ahorasi')

})

// Validar y Revalidar token
// api.get('/renew', validarJWT, revalidarToken)

module.exports = api;
