const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded( {extended: true} ));

const sequelize = new Sequelize('proyecto-backend', null, null, {
    dialect: 'sqlite',
    storage: './proyecto-backend'
});

app.post('/pendientes', function(req, res) {
    res.send('Inserción Finalizada');
});

app.listen(3000);