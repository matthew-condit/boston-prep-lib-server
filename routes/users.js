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
            authenticated: true
        })
    } else {
        res.status(401).json({
            authenticated: false
        })
    }
});


module.exports = router;