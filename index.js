const path = require('path')
const express = require('express')
const { config, engine } = require('express-edge')

//Instanciando modelo
const Usuario = require('./database/models/Usuario')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const app = new express()

mongoose.connect(`mongodb://localhost/BPTRANSPORT`)

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);

//Body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Creado en index.edge
//<td>{{usuario.creadoEn}}</td>

//Routes

app.get('/', async(req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/index.html'))
    const usuarios = await Usuario.find({})
    console.log(usuarios)
    res.render('index', {
        usuarios
    })
})

app.get('/usuario/:id', async(req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    console.log(usuario)
    res.render('usuario', {
        usuario
    })
})

app.get('/ingresar', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/ingresar.html'))
    res.render('ingresar')
})

app.post('/ingresar/guardar', (req, res) => {
    Usuario.create(req.body, (error, usuario) => {
        res.redirect('/')
    })
})

//Ingresar vehiculos
/*app.get('/vehiculos', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/ingresar.html'))
    res.render('vehiculos')
})/*

/*app.post('/vehiculos/guardar', (req, res) => {
    Usuario.create(req.body, (error, usuario) => {
        res.redirect('/')
    })
})*/

//Editar
app.get('/editar/:id', async(req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/editar.html'))
    const usuario = await Usuario.findById(req.params.id)

    console.log(usuario)

    res.render('editar', {
        usuario
    })
})

//Editar post
app.post('/editar/guardar', (req, res) => {
    const idUsuario = req.body.id
    console.log(idUsuario)

    Usuario.findByIdAndUpdate(idUsuario, {
        nombre: req.body.nombre,
        email: req.body.email,
        Contraseña: req.body.Contraseña
    }, (error, usuario) => {
        console.log(error, idUsuario)
        res.redirect('/')
    })
})

//Borrar
app.get('/borrar/:id', async(req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/editar.html'))
    const usuario = await Usuario.findById(req.params.id)

    console.log(usuario)

    res.render('borrar', {
        usuario
    })
})

//Borrar post
app.post('/borrar', (req, res) => {
    const idUsuario = req.body.id
    console.log(idUsuario)

    Usuario.findByIdAndRemove(idUsuario, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/")
        }

    })
})

//Login
app.get('/login', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/ingresar.html'))
    res.render('login')
})

app.post('/login/guardar', (req, res) => {
    Usuario.create(req.body, (error, usuario) => {
        res.redirect('/')
    })
})

//Crear Cuenta
app.get('/usuario', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/ingresar.html'))
    res.render('usuario')
})

app.post('/usuario/guardar', (req, res) => {
    Usuario.create(req.body, (error, usuario) => {
        res.redirect('/')
    })
})

//Server PORT
app.listen(4000, () => {
    console.log('Aplicacion corriendo en el puerto 4000')
})