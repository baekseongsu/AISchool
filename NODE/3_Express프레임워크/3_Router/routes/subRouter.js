const express = require("express");
const router = express.Router();

const path = require("path");
const file_path = path.join(__dirname, "../public");

router.get("/", (req, res) => {
  res.sendFile(file_path + "/minormain.html");
});

router.get("/fishing", (req, res) => {
  res.sendFile(file_path + "/fishing.html");
});

module.exports = router;
