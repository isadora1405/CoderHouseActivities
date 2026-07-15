const express = require('express');

const app = express();

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const petsRouter = require('./router/petRoute.js');

app.use('/static',express.static(path.join(__dirname,'..','public')))

app.use('/api/pets', petsRouter);

app.listen(8080, () => {

    console.log('Servidor ouvindo na porta 8080');

});