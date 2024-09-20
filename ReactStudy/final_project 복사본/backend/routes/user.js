const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.post("/join", (req, res) => {
  console.log("회원가입요청");

  console.log(req.body);

  let { id, pw, nick } = req.body;
  let sql = `INSERT INTO LINK_MEMBER VALUES(?, ?, ?)`;

  conn.connect();

  conn.query(sql, [id, pw, nick], (err, rows) => {
    if (err) {
      console.log("회원가입 도중 오류 발생!", err);
    }
    if (rows) {
      res.json({ result: "join success" });
    } else {
      res.json({ result: "join fail" });
    }
  });

  conn.end();
});

router.post("/login", (req, res) => {
  console.log("로그인요청");

  console.log(req.body);

  let { id, pw } = req.body;
  let sql = `
  SELECT *
  FROM LINK_MEMBER
  WHERE ID = ? and PW = ?
  `;

  conn.connect();

  conn.query(sql, [id, pw], (err, rows) => {
    if (err) {
      console.log("로그인 도중 오류 발생", err);
    }
    if (rows.length > 0) {
      res.json({ result: "login success", nick: rows[0].NICKNAME });
    } else {
      res.json({ result: "login fail" });
    }
  });
});

module.exports = router;
