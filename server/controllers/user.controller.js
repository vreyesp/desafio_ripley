'use strict'

const { response } = require('express');
const usuarios = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/JWT');
const moment = require('moment')
const jwt = require('jsonwebtoken');
const config = require('../config/general');

console.log('eeee');

// Crear usuario
const crearUsuario = async(req, resp = response) => {

}

const login = async(req, res) => {
    var rut = req.body.rut;
    const password = req.body.password;
    var dv = ''
    if (!rut) return res.send({ success: false, msg: "El rut es requerido" });
    if (!password) return res.send({ success: false, msg: "la contraseña es requerido" })

    rut = rut.replace("-", "");
    rut = rut.replace(/\./g, "");
    dv = rut[rut.length - 1];
    rut = rut.slice(0, -1);

    await console.log(rut, dv, password);

    try {
        const user = await usuarios.findOne({ rut: rut.toString() });
        await console.log("user", user);
        if (!user) return res.status(200).json({ success: false, msg: 'Usuario o contraseña incorrecto' });
        const matchClave = await bcrypt.compareSync(password.toString(), user.password.toString());
        await console.log('comparar', matchClave);
        if (!matchClave) return res.status(200).json({ success: false, msg: 'Usuario o contraseña incorrect' });
        const payload = {
            'id': user._id,
            'rut': user.rut,
            "iat": moment().unix(),
            "die": moment().add(24, 'hours').unix()
        }
        const token = jwt.sign(payload, config.jwtSecretKey);
        if (user) {
            return res.status(200).json({
                success: true,
                msg: 'Usuario encontrado',
                data: {
                    token: token
                }
            });
        } else {
            return res.status(400).json({
                success: false,
                msg: 'Usuario no encontrado'
            });
        }
    } catch (error) {
        console.log("Error en login: ", error);
        return res.send({ success: false, msg: "Ha ocurrido un problema al buscar el usuario, por favor intente más tarde", })
    }
}

const agregarDestinatarios = async() => {

}

const revalidarToken = async(req, resp = response) => {

    const { uid, name } = req;
    //Generar un nuevo JWT
    const token = generarJWT(uid, name);

    return resp.json({
        ok: true,
        uid,
        name,
        token

    });
}


module.exports = {
    crearUsuario,
    revalidarToken,
    login,
    agregarDestinatarios
}