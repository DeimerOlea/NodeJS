const path = require ('path');
const morgan = require ('morgan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/deimerTest', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB connected OK")
});

/*
    .then(db => console.log('MongoDB is connect'))
    .catch(err => console.log(err)); */

//importando rutas
const indexRoutes = require('./routes/index');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//rutas
app.use('/', indexRoutes);


//Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`Aplicacion de pruebas --> http://localhost:${app.get('port')}`);

})