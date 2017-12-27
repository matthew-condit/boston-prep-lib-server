// var promise = require('bluebird');
var _tryCatchHOF = require('../utils').async._tryCatchHOF;

var options = {
  // Initialization Options
  // promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/boston_prep_lib';
var db = pgp(connectionString);

const getAllUsers = async(req, res, next) => {
  const data = await db.any('select * from users');
  res.status(200).json({
    status: 'success',
    data,
    messsage: 'Retrieved all users'
  })
};

const getUserById = async(req, res, next) => {
  const userId = parseInt(req.params.id);
  console.error('userId', userId);
  const user = await db.one('select * from users where id = $1', userId)
  res.status(200).json({
    status: 'success',
    data: user,
    messsage: 'Retrieved User by Id'
  })
}

const createNewUser = async(req, res, next) => {
  await db.none('insert into users(firstName, lastName, email) values(${firstName}, ${lastName}, ${email})', req.body)
  res.status(200).json({
    status: 'success', 
    message: `Created new user ${req.body.firstName}`
  });
}


module.exports = {
  getAllUsers: _tryCatchHOF(getAllUsers),
  getUserById: _tryCatchHOF(getUserById),
  createNewUser: _tryCatchHOF(createNewUser)
};