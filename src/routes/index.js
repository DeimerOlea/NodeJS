const express = require ('express');
const router = express.Router();


const Task = require ('../models/tasks');
const User = require ('../models/users');

//Homepage
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    const users = await User.find();
    res.render('index',{tasks, users});
});


//Tasks page
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    const users = await User.find();
    res.render('tasks',{tasks, users});
});

//AddTask
router.post ('/addTask', async (req, res) =>{
    const task = new Task(req.body);
    console.log(req.body);
    await task.save();
    res.redirect('/');
});

//Find all tasks
router.post ('/findTasks', async (req, res) =>{
    const task = new Task(req.body);
    console.log(req.body);
    await task.save();
    res.redirect('/');
});

router.post ('/addUser', async (req, res) =>{
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

module.exports = router;