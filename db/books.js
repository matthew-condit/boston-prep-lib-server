// var promise = require('bluebird');
const _tryCatchHOF = require('../utils').async._tryCatchHOF;
const db = require('./index').db;

const getAllBooks = async () => {
  return await db.any('select * from books');
};

const getBookById = async (id) => {
  return await db.one('select * from books where id = $1', id);
};

module.exports = {
  getAllBooks: _tryCatchHOF(getAllBooks),
  getBookById: _tryCatchHOF(getBookById)
};