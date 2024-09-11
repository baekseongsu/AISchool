const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ok628766",
  port: 3306,
  database: "nodejs",
});

conn.connect();

module.exports = conn;
