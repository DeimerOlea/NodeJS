const express = require ('express');
const router = express.Router();

const Car = require ('../models/cars');

router.get('/', (req, res) => {
    res.render('index')
});

router.post ('/add', (req, res) =>{
    console.log (req.body);
    res.send('recibido');
});


module.exports = router;