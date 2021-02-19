const mongoose = require ('mongoose');
const schema = mongoose.Schema

const SchemaCar = new schema ({
    marca: String,
    modelo: String,
    color: String,
    descripcion: String
});

module.exports = mongoose.model('cars',SchemaCar);
