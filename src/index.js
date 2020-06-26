const express = require('express');
const app = express();
const path = require('path');


// Puerto del servidor
app.set('port', 3000); // Puerto del servidor
app.set('views', path.join(__dirname, 'views')); // Dirección de la carpeta donde esta el html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // Plantilla a ser utilizada

// Rutas

app.use(require('./rutas/index'));

//static file

app.use(express.static(path.join(__dirname, 'public')));


/*
app.get('/', (req, res) => {
    res.sendFile( path.join(__dirname,  'views/index.html'));

}); */ 


app.listen(app.get('port'), () =>{
    console.log('servidor activo', app.get('port'));
})
