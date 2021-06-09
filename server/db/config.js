'use strict'
const config = require('../config/general');
const port = config.port;
const mongoose = require("mongoose")
const https = require("https");
const fs = require('fs');
var express = require("express");
var app = require('../index');


var user = encodeURIComponent(config.mongoUser);
var p = encodeURIComponent(config.mongoP);
var mongoURL = `mongodb://${user}:${p}@${config.mongoUrl}?authSource=${config.mongoAuthSource}`;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, { useNewUrlParser: true })
    .then(() => {
        console.log("Conexión con MongoDB establecida");


        if (config.local) {
            app.listen(port, () => {
                console.log("Servidor Node está corriendo en el puerto local: " + port)
            });
        }
        else {
            console.log('https');
            https.createServer({
                key: fs.readFileSync('./ssl/solnet.cl/Clave.key'),
                cert: fs.readFileSync('./ssl/solnet.cl/SSL Certificate - .solnet.cl.crt'),
                requestCert: false,
                rejectUnauthorized: false
            }, app).listen(port, () => {
                console.log(`SSL`);
                console.log(`Servidor Node está corriendo en el puerto ${port}`)
            })
        }
    })
    .catch(err => console.log(err));

// app.listen(port, () => {
//     console.log("Servidor Node está corriendo en el puerto: " + port)
// });

