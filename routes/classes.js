var express = require('express');
var router = express.Router();

var Classes = require('../db').classes;

router.get('/', async (req, res, next) => {
    const classes = await Classes.getAllClasses();
    res.status(200).json(classes);
});

module.exports = router;