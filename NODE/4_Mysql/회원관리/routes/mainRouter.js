const express = require("express");
const router = express.Router();

// 사용자가 메인에 도착했을 때!
router.get("/", (req, res) => {
  res.render("main");
});

// 사용자가 회원가입을 요청했을 때!
router.get("/join", (req, res) => {
  res.render("join");
});

// 사용자가 로그인을 요청했을 때!
router.get("/login", (req, res) => {
  res.render("login");
});

// 사용자가 정보 수정을 요청했을 때
router.get("/update", (req, res) => {
  res.render("update");
});

// 사용자가 정보 삭제를 요청했을 때
router.get("/delete", (req, res) => {
  res.render("delete");
});
module.exports = router;
