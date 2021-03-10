const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const SchemaUser = new schema ({
    userName: String
});

module.exports = mongoose.model('Users', SchemaUser);