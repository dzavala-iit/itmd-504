const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "http://172.31.4.53:3306/",
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
    
    const sql = "update employees set `Name` = ?, `Email` = ? where ID = ?";
    const values = [
        req.body.Name,
        req.body.Email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/employees/:id', (req, res) => {
    const sql = "DELETE FROM employees WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Server is running on port 8081 and listening");
})