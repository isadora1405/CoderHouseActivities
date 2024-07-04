const mongoose = require('mongoose');
const studentsCollection = 'students';
const studentSchema = new mongoose.Schema({
    nome: String,
    nota: Number,
    curso: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(studentsCollection, studentSchema)