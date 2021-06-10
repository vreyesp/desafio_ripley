const user = encodeURIComponent('solnet1');

module.exports = {
    local: false,
    port: 4000,

    //MONGO////
    mongoUrl: 'mongodb+srv://victor:<password>@cluster0.5bbmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    mongoUser: '',
    mongoP: '',
    mongoAuthSource: 'admin',
    jwtSecretKey: "marcianeke"
}