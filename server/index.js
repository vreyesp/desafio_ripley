'use strict'

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Rutas

var user_routes = require("./routes/user.route");
var transferencia_routes = require("./routes/transferencia.route");

const fileUpload = require('express-fileupload')

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb' }));

//uploads

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: __dirname + '/uploads/files/'
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,X-Auth-Token, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


app.use("/api/v1/user/", user_routes);
app.use("/api/v1/tr/", transferencia_routes);


module.exports = app;