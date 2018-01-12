// var promise = require('bluebird');
const _tryCatchHOF = require('../utils').async._tryCatchHOF;
const db = require('./index').db;

const getAllClasses = async () => {
    return await db.any('select * from classes');

};

module.exports = {
    getAllClasses: _tryCatchHOF(getAllClasses)
};