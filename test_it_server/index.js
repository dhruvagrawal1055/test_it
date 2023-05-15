const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const sql = require('mssql')
const { StringDecoder } = require('string_decoder');
const {readFileSync} = require("fs");
const decoder = new StringDecoder('utf8');

app.use(express.json());
app.use(cors());
var con=mysql.createConnection(
    {
        host: "elitmus.mysql.database.azure.com",
        user: "Dhruv",
        password: "RAMshyam@1055",
        database: "puzzle_game",
        port: 3306
    }
);
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test1",
//     port: 4306
// });
app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.name;
    let sql = `INSERT INTO users (Email, Password, Name)
                      SELECT '${email}', '${password}', '${username}'
                      WHERE NOT EXISTS(SELECT * FROM users WHERE Email = '${email}');`
    con.query(sql, (err, result) => {
        console.log(result)
        if (result.affectedRows==0) {
            res.send("User Already Exists PLease Log in to continue");
        }
        else if(result.affectedRows==1){
            res.send("User registered Successfully")
        }
        else {
            res.send({ message: err });
        }
    })
});
app.post('/login', (req, res) => {
    const email = req.body.email.toString();
    const password = req.body.password.toString();
    const sql = `SELECT * FROM users WHERE (Email = '${email}' OR Name = '${email}') AND Password = '${password}'`
    con.query(sql, (err, result) => {
        console.log(result)
        if (err) {
            res.send(err);
        }
        else {
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send("Wrong Usename ans password")
            }
        }
    })
});
app.listen(3001, () => {
    console.log("running backend");
});