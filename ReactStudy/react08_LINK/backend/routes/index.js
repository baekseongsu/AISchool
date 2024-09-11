const express = require("express");
const router = express.Router();
const path = require("path");
const conn = require("../config/db");

router.get("/", (req, res) => {
  console.log("main router!");
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "build", "index.html")
  );
});

router.post("/getData", (req, res) => {
  console.log("Form으로 요청이 들어옴..!", req.body);

  let sql = "INSERT INTO NODEJS_MEMBER VALUES(?, ?, ?)";
  conn.query(sql, ["admin", 1234, req.body.data], (err, rows) => {
    if (err) {
      console.log("insert query 이슈 발생!");
    }
    if (rows) {
      res.send({ result: "success" });
    } else {
      res.send({ result: "success" });
    }
  });

  conn.end();
});

// 실습) 회원가입, 로그인 처리를 할 수 있는 기능 구현하기
router.post("/join", (req, res) => {
  console.log("회원가입", req.body);

  let sql = `
  INSERT INTO NODEJS_MEMBER
  VALUES(?, ?, ?)
  `;

  conn.query(sql, [req.body.id, req.body.pw, req.body.nick], (err, rows) => {
    if (err) {
      console.log("join query 이슈 발생!");
    }
    if (rows) {
      res.send({ result: "회원가입 success" });
    } else {
      res.send({ result: "회원가입 fail" });
    }
  });
});

router.post("/login", (req, res) => {
  console.log("로그인", req.body);

  let sql = `
  SELECT * 
  from NODEJS_MEMBER
  WHERE ID = ? AND PW = ?`;
  conn.query(sql, [req.body.id, req.body.pw], (err, rows) => {
    if (err) {
      console.log("login query 이슈 발생!");
    }
    if (rows.length > 0) {
      res.send({ result: "로그인 success" });
    } else {
      res.send({ result: "로그인 fail" });
    }
  });
});

module.exports = router;
