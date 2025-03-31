const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "itmd504"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    let sql = "INSERT INTO employees values (null, ?, ?)";
    let Name = req.body.Name;
    let Email = req.body.Email;
    let params = [Name, Email];
    console.log(params);
    db.query(sql, params, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    
    let sql = "update employees values (?, ?) where ID = ?";
    let ID = req.params.id;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let params = [ID, Name, Email];
    console.log(params);
    db.query(sql, params, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Server is running on port 8081 and listening");
})