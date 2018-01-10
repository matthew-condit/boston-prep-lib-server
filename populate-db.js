const options = {
  // Initialization Options
  // promiseLib: promise

};
const connectionOptions = {
  user: 'mcondit',
  password: 'eagles04',
  host: 'localhost',
  port: 5432,
  database: 'boston_prep_lib'
};

const pgp = require('pg-promise')(options);
const db = pgp(connectionOptions);


const parsedBooks = require('./data.json');

for (let bookId in parsedBooks) {
  const book = parsedBooks[bookId];

  db.none('insert into books(id, title, author, description, lexile, pages, genre, coverImageUrl,  tags) ' +
    'values(${id}, ${title}, ${author}, ${description}, ${lexile}, ${pages}, ${genre}, ${coverImageUrl},  ${tags})', book);
}