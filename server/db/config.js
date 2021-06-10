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
var mongoURL = `mongodb+srv://victor:victor123@cluster0.5bbmo.mongodb.net/desafio-ripley?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, { useNewUrlParser: true })
    .then(() => {
        console.log("Conexión con MongoDB establecida");
        if (config.local) {
            app.listen(port, () => {
                console.log("Servidor Node está corriendo en el puerto local: " + port)
            });
        } else {
            console.log('https');

        }
    })
    .catch(err => console.log(err));