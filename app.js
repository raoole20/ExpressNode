const express = require('express');
const app = express();
const hbs = require('hbs');        

require('dotenv').config();

app.use( express.static('public') );

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.get('/index',  (req, res) => {
  res.render( 'index', {
      nombre: 'Raul Espina',
      titulo: 'El dios de la programacion'
  });
})

app.get('/',  (req, res) => {
  res.render( 'index', {
      nombre: 'Raul Espina',
      titulo: 'El dios de la programacion'
  });
})


app.get('/generic', function (req, res) {
   res.render( 'pag2', {   
  });
})

app.get('/elements', function (req, res) {
   res.render( 'pag3', {
  });
})

app.get('*', function (req, res) {

  res.sendFile( __dirname +  '/public/error.html');
})

app.listen( process.env.PORT_KEY );

