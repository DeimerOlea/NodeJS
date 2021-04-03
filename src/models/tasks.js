const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const SchemaTask = new schema ({
    title: String,
    description: String,
    assigned: {type: String, default: 'Unassigned'},
    status: {type: String, default: 'Open'}
});

module.exports = mongoose.model('Tasks', SchemaTask);

