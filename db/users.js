// var promise = require('bluebird');
const _tryCatchHOF = require('../utils').async._tryCatchHOF;
const db = require('./index').db;

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
  const user = await db.one('select * from users where id = $1', userId);
  res.status(200).json({
    status: 'success',
    data: user,
    messsage: 'Retrieved User by Id'
  })
};

const getUserByEmail = async(email) => {
  const user = await db.one('select * from users where email = $1', email);
  return user;
};

const createNewUser = async(req, res, next) => {
  req.body.role = "member";
  req.body.books = [];
  await db.none('insert into users(firstName, lastName, password, email, role, books) values(${firstName}, ${lastName}, ${password}, ${email}, ${role})', req.body);
  res.status(200).json({
    status: 'success', 
    message: `Created new user ${req.body.firstName}`
  });
};


module.exports = {
  getAllUsers: _tryCatchHOF(getAllUsers),
  getUserById: _tryCatchHOF(getUserById),
  createNewUser: _tryCatchHOF(createNewUser),
  getUserByEmail: _tryCatchHOF(getUserByEmail),
};