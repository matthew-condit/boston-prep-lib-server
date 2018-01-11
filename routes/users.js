var express = require('express');
var router = express.Router();

var Users = require('../db').users;

router.get('/', Users.getAllUsers);
router.get('/:id', Users.getUserById);
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