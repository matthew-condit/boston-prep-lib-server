var express = require('express');
var router = express.Router();


router.get('/', db.getAllUsers);

module.exports = router;
