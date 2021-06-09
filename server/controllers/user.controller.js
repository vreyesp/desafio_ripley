'use strict'

const { response } = require('express');
const usuarios = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/JWT');
const moment = require('moment')
const jwt = require('jsonwebtoken');
const config = require('../config/general');

console.log('eeee');

// Crear usuario
const crearUsuario = async (req, resp = response) => {

    const { name, email, password } = req.body;
    console.log(name, email, password);

    try {

        // Verficar correo unico

        const user = await usuario.findOne({ email });

        if (user) {
            return resp.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese correo'
            });

        }

        //         // Crear usuario con el modelo 
        const dbUser = new usuario(req.body);


        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt)

        // Generar el JasonWebToken
        const token = await generarJWT(dbUser.id, name);

        // Crear usuario de BD
        await dbUser.save();

        // Generar Respuesta Exitosa
        return resp.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });

    }
    catch (error) {
        console.log(error)

        return resp.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }



}

//Login
function loginUsuario(req, resp) {
    console.log('login inicio');
    const { email, password } = req.body;
    console.log(email, password);
    console.log('xs');
    try {
        const dbUser = usuario.findOne({ email })
        console.log('login inicio');

        if (!dbUser) {
            return resp.status(400).json({
                ok: true,
                msg: 'Credenciales no validas'
            })
        }

        //Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return resp.status(400).json({
                ok: false,
                msg: 'El password no es valido'
            })
        }
        console.log('generar token');
        //Generar el JWT
        const token = generarJWT(dbUser.email, dbUser.password);

        //Respuesta del servicio
        return resp.json({
            ok: true,
            uid: dbUser.email,
            name: dbUser.password,
            token

        })

    } catch (error) {
        return resp.status(500).json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const login = async (req, res) => {
    const emailP = req.body.email;
    const passwordP = req.body.password;
    console.log('aaa', emailP, passwordP, req.body);
    try {
        const user = await usuarios.findOne({ email: emailP.toString() });
        if (!user) return res.status(200).json({ success: false, msg: 'Usuario o contraseña incorrectoo' });
        console.log('para', passwordP);
        console.log('us', user.password);
        const matchClave = await bcrypt.compareSync(passwordP.toString(), user.password.toString());
        console.log('122', matchClave);
        if (!matchClave) return res.status(200).json({ success: false, msg: 'Usuario o contraseña incorrect' });
        console.log('logiii');
        const payload = {
            'id': user._id,
            'rut': user.rut,
            "iat": moment().unix(),
            "die": moment().add(24, 'hours').unix()
        }
        const token = jwt.sign(payload, config.jwtSecretKey);
        const publicData = {
            id: user._id,
            rut: user.rut,
            dv: user.dv,
            password: user.password,
            refToken: user.refToken,
            active: user.active,
            email: user.email,

            idCliente: user.idCliente,
        }

        if (user) {
            return res.status(200).json({
                success: true,
                msg: 'Usuario encontrado',
                data: {
                    token: token,
                    publicData: publicData
                }
            });
        } else {
            return res.status(400).json({
                success: false,
                msg: 'Usuario no encontrado',
                data: {
                  
                }
            });
        }
    } catch (error) {
        console.log("Error en login: ", error);
        return res.status(200).json({ success: false, msg: "Ha ocurrido un problema al buscar el usuario, por favor intente más tarde", })
    }
}

const revalidarToken = async (req, resp = response) => {

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
    loginUsuario,
    revalidarToken,
    login
}