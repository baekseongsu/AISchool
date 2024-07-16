const express = require("express");
const router = express.Router();
const bp = require("body-parser");

router.use(bp.urlencoded({ extended: true }));

// 메인 페이지 요청이 들어왔을 때
router.get("/", (req, res) => {
  res.render("main");
});

router.post("/login", (req, res) => {
  if (req.body.id == "smhrd" && req.body.pw == "1234") {
    res.render("success", { id: req.body.id });
  } else {
    res.render("fail");
  }
});

module.exports = router;
