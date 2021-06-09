'use strict'

const jwt = require('jwt-simple');
const secret = 'dGVkaWdvdW5hcGFsYWJyYW1hbnVxdWVzaXRv'; /**tedigounapalabramanuquesito */
const moment = require('moment');

exports.ensureAuth = function (req, res, next) {
    //console.log('authenticate.js req.headers', req.headers)
    if (!req.headers.authorization) {

        console.log('La petición no tiene cabecera de authorization');
        return res.status(403).send({
            message: "La petición no tiene cabecera de authorization"
        })

    } else {

        var token = req.headers.authorization.replace(/['"]+/g, '');

        try {

            var payload = jwt.decode(token, secret);

			if( moment().unix() > payload.die){
				return res.status(403).send({
					success: false,
					message: "Error: Este token ya expiró"
				});			
			}

            req.user = payload;

            next();


        } catch (ex) {


            return res.status(403).send({
                message: "El token no es válido"
            });

        }

    }

};
