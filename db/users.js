// var promise = require('bluebird');
const _tryCatchHOF = require('../utils').async._tryCatchHOF;
const db = require('./index').db;

const getAllUsers = async (req, res, next) => {
    const data = await db.any('select * from users');
    res.status(200).json({
        status: 'success',
        data,
        messsage: 'Retrieved all users'
    })
};

const getUserById = async (id) => {
    const userId = parseInt(id);
    return await db.one('select * from users where id = $1', userId);

};

const getUserByEmail = async (email) => {
    return await db.one('select * from users where email = $1', email);
};

const createNewUser = async (req, res, next) => {
    req.body.role = "member";
    req.body.books = [];
    req.body.classroom = req.body.classroomId;
    const user = await  db.one('insert into users(firstName, lastName, classroom, password, email, role, books) values(${firstName}, ${lastName}, ${password}, ${email}, ${role})', req.body);
    const classroom = await db.one(
        'Update classes' +
        'SET students =  array_append(students, ${userId})' +
        'WHERE id = ${classroomId}', {userId: user.id, classroomId: req.body.classroom});
    res.status(200).json({...user, classroom });
};


const addBookToUser = async ({bookId, userId}) => {
    return await db.none("UPDATE users " +
        "SET readBooks = array_append(readBooks, ${bookId})" +
        "WHERE id = ${userId}", {bookId, userId});
};

const getBooksByUserList = async (userId) => {
    const res = await db.any(
        "SELECT * FROM books" +
        " WHERE id = " +
        " ANY((SELECT readBooks " +
        "   FROM users " +
        "   WHERE id = ${userId})::VARCHAR[])", {userId});
    return res;
};


module.exports = {
    getAllUsers: _tryCatchHOF(getAllUsers),
    getUserById: _tryCatchHOF(getUserById),
    createNewUser: _tryCatchHOF(createNewUser),
    getUserByEmail: _tryCatchHOF(getUserByEmail),
    addBookToUser: _tryCatchHOF(addBookToUser),
    getBooksByUserList: _tryCatchHOF(getBooksByUserList),
};