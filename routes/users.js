var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/', db.getAllUsers);
router.get('/:id', db.getUserById);
router.post('/register', db.createNewUser);

module.exports = router;
