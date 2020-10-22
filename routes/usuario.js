const express = require('express')
const router = express.Router();

router.get('/usuario/guardar', (req, res) => {
    res.render('usuario/guardar')
});

router.get('/login/guardar', (req, res) => {
    res.render('login/guardar')
});

router.post('/usuario/guardar', (req, res) => {
    const { Name, Email, Password } = req.body;

    if (Password.length > 4) {
        errors.push({ text: 'password muy corta' });
    }
    res.send('ok')
});


module.exports = router;