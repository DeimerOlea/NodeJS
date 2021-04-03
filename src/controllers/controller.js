const Task = require ('../models/tasks');
const User = require ('../models/users');

exports.create = async (req, res) => {
    const tasks = await Task.find();
    res.set('Content-Type', 'application/json');
    res.status(200);
    res.send(tasks);

}