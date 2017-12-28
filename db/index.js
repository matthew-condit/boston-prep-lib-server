const options = {
  // Initialization Options
  // promiseLib: promise

};
const connectionOptions = {
  user: 'postgres',
  password: 'eagles04',
  host: 'localhost',
  port: 5432,
  database: 'boston_prep_lib'
};

const pgp = require('pg-promise')(options);
const db = pgp(connectionOptions);

module.exports = {};
module.exports.db = db;
module.exports.users = require('./users');
