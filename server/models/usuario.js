

'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
    rut: String,
    dv: String,
    password: String,
    refToken: String,
    active: Boolean,
    email: String, 
    drafts: [{
        draftId: {type: Schema.ObjectId, ref: 'Draft'}
    }],
    recordId: String});
    idCliente: Number,


module.exports = mongoose.model("usuarios", UserSchema);