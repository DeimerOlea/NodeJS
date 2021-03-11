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

// TASKS-------------------------------------
// GET method for tasks
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.render('tasks',{tasks});
});

// POST method for tasks
router.post ('/addTask', async (req, res) =>{
    const task = new Task(req.body);
    console.log(req.body);
    await task.save();
    res.redirect('/');
});


// router.post ('/tasks', async (req, res) =>{
//     const task = new Task(req.body);
//     console.log(req.body);
//     await task.save();
//     res.redirect('/tasks');
// });

// //Find all tasks
// router.post ('/findTasks', async (req, res) =>{
//     const task = new Task(req.body);
//     console.log(req.body);
//     await task.save();
//     res.redirect('/');
// });

// -----USERS-----
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.render('users',{users});
});

router.post('/users', async (req, res) => {
    //console.log(req.body.userName);
    // if(req.body.userName == '' ){
    //     const users = await User.find();
    //     res.render('users',{users});
    // }else{
        //const name = req.body.userName;

        const query  = User.where({ userName: `${req.body.userName}` });
        query.findOne(function (err, users) {
            if (err) return handleError(err);
            if (users) {
                console.log(users);
                res.render('users',{users});
            }
          });
        // await User.findOne({userName: `${req.body.userName}`}, function(err,users) { 
        //   console.log(users);
        //   res.render('users',{users});
        //  });
    //}
});


router.post ('/addUser', async (req, res) =>{
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

module.exports = router;