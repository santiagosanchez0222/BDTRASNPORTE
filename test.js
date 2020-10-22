const mongoose = require('mongoose')

const Usuario = require('./database/models/Usuario')

mongoose.connect(`mongodb://localhost/BPTRANSPORT`)

Usuario.findByIdAndUpdate("5f909a1a9e6eb03590f54365", {
    nombre: 'Mauricio',
    telefono: '4442211'

}, (error, usuario) => {
    console.log(error, usuario)
})

/*Usuario.find({}, (error, usuarios) => {
    console.log(error, usuarios)
})*/

/*Usuario.find({
    nombre: 'Juan'
}, (error, usuarios) => {
    console.log(error, usuarios)
})*/

/*
Usuario.create({
    nombre: 'Santiago',
    telefono: '12345',
    email: 'santiago@com'
}, (eror, usuario) => {
    console.log(error, usuario)
})*/