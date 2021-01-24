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

app.post('/register', (req, res) => {
const fornavn = req.body.fornavn
const etternavn = req.body.etternavn
const email = req.body.email
const passord = req.body.passord


 db.query("INSERT INTO bruker (fornavn, etternavn, email, passord, brukerId) VALUES(?, ?, ?, ?, ?)", [email, fornavn, etternavn, passord], (err, result)=> {    
    console.log(err); 
 } )

});

//'node server.js' i konsoll starter server
//Husk å cd server
app.listen(3003, () => {
    console.log("Server kjører på port 3003");
});