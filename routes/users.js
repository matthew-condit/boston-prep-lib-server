var express = require('express');
var router = express.Router();

var Users = require('../db').users;
var Classrooms = require('../db').classes;

router.get('/', Users.getAllUsers);

router.get('/details/:id', async (req, res, next) => {
    console.log('params', req.params);
    const user = await Users.getUserById(req.params.id);
    console.log(user);
    const classroom = await Classrooms.getClassById(user.classroomid);
    res.status(200).json({...user, classroom});
});

router.post('/register', Users.createNewUser);


router.post('/login', async (req, res, next) => {
    const user = await Users.getUserByEmail(req.body.email);
    console.error(user, req.body);
    if (user.password === req.body.password) {
        res.status(200).json({
            authenticated: true,
            user
        })
    } else {
        res.status(401).json({
            authenticated: false
        })
    }
});

router.post('/addBook', async (req, res, next) => {
    await Users.addBookToUser(req.body);
    const updated = await Users.getUserById(req.body.userId);
    res.status(200).json(updated);
});

router.post('/booksByUser', async ( req, res, next) => {
    const list = await Users.getBooksByUserList(req.body.userId);
    res.status(200).json(list);
});


module.exports = router;