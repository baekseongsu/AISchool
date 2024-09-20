const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("서버접속");
});

router.get("/position", (req, res) => {
  const positions = [
    {
      title: "광주인공지능사관학교",
      latlng: { lat: 35.146509995611616, lng: 126.92224431151041 },
    },
    {
      title: "컴포즈커피",
      latlng: { lat: 35.14609311269699, lng: 126.9222392210919 },
    },
    {
      title: "문화전당역",
      latlng: { lat: 35.14628999825055, lng: 126.92006620458147 },
    },
    {
      title: "CU",
      latlng: { lat: 35.14717691624344, lng: 126.92210924561252 },
    },
  ];

  res.json({ position: positions });
});

module.exports = router;
