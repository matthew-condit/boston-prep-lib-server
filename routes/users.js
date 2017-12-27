var express = require('express');
var router = express.Router();

var Users = require('../db').users;

router.get('/', Users.getAllUsers);
router.get('/:id', Users.getUserById);
router.post('/register', Users.createNewUser);


module.exports = router;
