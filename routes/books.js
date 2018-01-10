const express = require('express');
const router = express.Router();

const Books = require('../db/books');
/* GET books listing. */
router.get('/', async (req, res, next ) => {
  const books = await Books.getAllBooks();
  res.status(200).json(books);
});

router.get('/:id', async (req, res, next) => {
  const bookId = req.params.id;
  const book = await Books.getBookById(bookId);
  console.error(book);
  res.status(200).json(book);
});

router.post('/search/general', async (req, res, next) => {
  const {searchString } = req.body;
  const searchResults = await Books.getBooksBySearchString(searchString);
    res.status(200).json(searchResults);

});

module.exports = router;
