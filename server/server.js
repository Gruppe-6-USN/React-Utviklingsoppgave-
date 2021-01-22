const express = require('express');
const app = express();
const mysql = require('mysql');

//db tilkobling
const db = mysql.createConnection({
    host: 'itfag.usn.no',
    user: '233574',
    password: 'JWeiMrF0',
    database: '233574'

});


//'node server.js' i konsoll
app.listen(3003, () => {
    console.log("Server kjører på port 3003");
});