const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

//Server shit man trenger
app.use(cors());
//Oversetter json data
app.use(express.json());

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