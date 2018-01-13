// var promise = require('bluebird');
const _tryCatchHOF = require('../utils').async._tryCatchHOF;
const db = require('./index').db;

const getAllClasses = async () => {
    return await db.any('select * from classes');
};

const getClassById = async (id) => {
    console.error(id);
    return await db.one('select * from classes where id = $1', id);
};

const getStudentsInClassById = async (classId) => {
    return await db.any(
        'select *' +
        'from students stud' +
        'inner join classes cls' +
        'by stud.classroomid = cls.id' +
        'where cls.id = $1', classId);
};

module.exports = {
    getAllClasses: _tryCatchHOF(getAllClasses),
    getClassById: _tryCatchHOF(getClassById),
    getStudentsInClassById: _tryCatchHOF(getStudentsInClassById),
};