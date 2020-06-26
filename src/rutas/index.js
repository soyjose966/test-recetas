const express = require('express');
const router = express.Router();

// Ruta 1
router.get('/', (req, res) => {
    res.render('index.html', {Titulo: 'Recetas'});
});

// Ruta 2
router.get('/contact', (req, res) => {
    res.render('contact.html', {Titulo: 'Tiramisu'});
});

// Ruta 3
router.get('/quesillo', (req, res) => {
    res.render('quesillo.html', {Titulo: 'Quesillo'});
});

// Ruta 4
router.get('/brazo', (req, res) => {
    res.render('brazo.html', {Titulo: 'Brazo'});
});

// Ruta 5
router.get('/cremapastelera', (req, res) => {
    res.render('cremapastelera.html', {Titulo: 'Crema'});
});

// Ruta 6
router.get('/alitas', (req, res) => {
    res.render('alitas.html', {Titulo: 'Alitas'});
});

// Ruta 7
router.get('/Carne', (req, res) => {
    res.render('Carneguisada.html', {Titulo: 'Carne'});
});

// Ruta 8
router.get('/cerdo', (req, res) => {
    res.render('cerdo.html', {Titulo: 'cerdo'});
});

// Ruta 8
router.get('/pescado', (req, res) => {
    res.render('pescado.html', {Titulo: 'pesacdo'});
});

// Ruta 8
router.get('/ensaladadepasta', (req, res) => {
    res.render('ensaladadepasta.html', {Titulo: 'Ensalada'});
});

// Ruta 9
router.get('/EnsaladaMango', (req, res) => {
    res.render('EnsaladaMango.html', {Titulo: 'Ensalada'});
});

module.exports = router;