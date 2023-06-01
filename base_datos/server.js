const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded( {extended: true} ));

app.post('/pendientes', function(req, res) {
    res.send('Inserción Finalizada');
});

app.listen(3000);