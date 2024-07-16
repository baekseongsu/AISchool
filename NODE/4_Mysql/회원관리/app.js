const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bp = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");

// post 데이터 처리 등록
app.use(bp.urlencoded({ extended: true }));

// 라우터 등록
app.use("/", mainRouter);
app.use("/user", userRouter);

// 넌적스 셋팅
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(3000);

// 다음 시간 예제!
// DB연결정보를 활용해서 로그인, 정보수정, 회원가입, 조회 등등...
