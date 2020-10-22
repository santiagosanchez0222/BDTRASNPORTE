const { text } = require('body-parser')
const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    Placa: String,
    Modelo: String,
    carro: String,
    Propietario: String,
    Fecha: String,
    creadoEn: {
        type: Date,
        default: new Date()
    }
})

const Usuario = mongoose.model('Usuario', UsuarioSchema)
module.exports = Usuario