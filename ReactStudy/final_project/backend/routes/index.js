const express = require("express");
const router = express.Router();
const path = require("path");
const conn = require("../config/db");

// 기본 GET 요청 처리
router.get("/", (req, res) => {
  console.log("서버가 정상적으로 동작 중입니다.");
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "build", "index.html")
  );
});

router.post("/join", (req, res) => {
  console.log("회원가입 요청 들어옴", req.body);

  let sql = `INSERT INTO LINK_MEMBER VALUES(?, ?, ?)`;
  conn.query(
    sql,
    [req.body.member.id, req.body.member.pw, req.body.member.nick],
    (err, rows) => {
      if (err) {
        console.log("join query 이슈 발생!");
      }
      if (rows) {
        console.log("회원가입 성공!");
        res.send({ result: "회원가입 success" });
      } else {
        console.log("회원가입 실패!");
        res.send({ result: "회원가입 fail" });
      }
    }
  );
  conn.end();
});

router.post("/login", (req, res) => {
  console.log("로그인 요청 들어옴", req.body);
});

module.exports = router;
