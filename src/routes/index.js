const express = require ('express');
const router = express.Router();

const controller = require ('../controllers/controller');

const Task = require ('../models/tasks');
const User = require ('../models/users');

//Homepage
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index',{tasks});
});


// -------------- TASKS -------------------
// List all tasks
router.get('/tasks', async (req, res) => {
 const tasks = await Task.find();
    res.render('tasks',{tasks});
 });

 router.post('/addTask', async (req, res) => {
    const task = new Task (req.body);
    await task.save();
    res.redirect('/');
    });

// Edit task
router.get ('/editTask/:id', async (req, res) =>{

    const { id } = req.params;
    const task = await Task.findById ({_id: id});
    const users = await User.find();
    
    //console.log(task);    
    res.render('editTask', {task, users});
});


// Delete task
router.get ('/deleteTask/:id', async (req, res) =>{
    const { id } = req.params;
    await Task.remove ({_id: id});
    res.redirect('/');
});

// Update task
router.post ('/updateTask/:id', async (req, res) =>{
    const { id } = req.params;
    await Task.updateOne ({_id: id}, req.body);
    res.redirect('/');
});



// -----USERS-----
router.get('/users', async (req, res) => {

    //if(){}else
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
             if (!users) {
                 console.log('usin usuario');
                 res.redirect('/users');}
             if (users) {
                 console.log(users);
                 res.render('users',{users});
                // res.status(200).send(users);
                 
             }
           });
        // await User.findOne({userName: `${req.body.userName}`}, function(err,users) { 
        //   console.log(users);
        //   res.render('users',{users});
        //  });
    //}
});

router.post ('/userID', async (req, res) =>{
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

router.post ('/addUser', async (req, res) =>{
    const user = new User(req.body);
    console.log('Primer dato',user);
    if(user.userName === ''){
        console.log('usuario no puede estar vavcio');
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }else{
        await user.save();
        res.redirect('/');
    }

    
    
});

module.exports = router;