// DB와 연결정보를 관리하는 공간
const mysql = require("mysql2");

// DB연결정보를 설정
const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ok628766",
  database: "nodejs",
});

// 연결 진행!!
conn.connect();
console.log("db연결");

module.exports = conn;
