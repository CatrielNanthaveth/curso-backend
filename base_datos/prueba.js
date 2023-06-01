const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const app = express();

app.use(bodyParser.urlencoded( {extended: true} ));

let db = new sqlite3.Database('proyecto-backend');


app.post('/pendientes', function(req, res) {
    db.run(`INSERT INTO tasks(description) VALUES(?)`,  req.body.description);
    res.send('Inserción finalizada.');
}) 

app.listen(3000);

process.on('SIGINT', function() {
    console.log('Adiós - Atte. El servidor.');
    db.close();
    process.exit();
});