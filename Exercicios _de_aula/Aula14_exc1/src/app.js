const express = require('express');
const studentRouter = require('./router/students.router')
const mongoose = require('mongoose')

const app = express()
const server = app.listen(8080, ()=>console.log('Servidor na porta 8080'));

mongoose.connect('mongodb+srv://isadora1405:14051992i@codercluster.43rqgyi.mongodb.net/?retryWrites=true&w=majority&appName=CoderCluster').catch((error)=> {
    if(error) {
        console.log("Não foi possível conectar ao banco de dados: " +error)
        process.exit()
    }
})

app.use(express.json());
app.use('/api/students', studentRouter)