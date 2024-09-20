const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();

// 미들웨어
app.use(bodyParser.json());

// API 라우트
app.use("/api", routes);

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, "../frontend/build")));

// 포트 설정
app.set("port", process.env.PORT || 3001);

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
