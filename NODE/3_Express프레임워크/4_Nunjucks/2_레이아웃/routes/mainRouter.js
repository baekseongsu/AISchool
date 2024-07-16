const express = require("express");
const router = express.Router();

// 메인 페이지에 접속했을 때!
router.get("/", (req, res) => {
  res.render("main");
});

// 축구 페이지를 요청했을 때!
router.get("/soccer", (req, res) => {
  res.render("soccer");
});

// 야구 페이지를 요청했을 때!
router.get("/baseball", (req, res) => {
  res.render("baseball");
});

module.exports = router;
