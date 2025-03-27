const express = require("express");
const cors = require("cors");
const mysql = require("mysql")

const app = express();

app.use(cors());

mysql.createConnection({
    host: "database-1.c3agy6ykydbf.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "TfgCbs|[Jl9k|6G_!vX2k)MG(ae>",
    database: "itmd-504"
})

app.listen(8081, () => {
    console.log("Server is running on port 8081 and listening");
})