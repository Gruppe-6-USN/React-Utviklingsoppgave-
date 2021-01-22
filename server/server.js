const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({

});

app.listen(3001, () => {
    console.log("Server kjører på port 3001");
});