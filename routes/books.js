var express = require('express');
var router = express.Router();

const Books = require('../db/books');
/* GET books listing. */
router.get('/', async (req, res, next) => {
  const books = await Books.getAllBooks();
  res.status(200).json(books);
});

module.exports = router;
