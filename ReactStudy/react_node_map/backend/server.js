const express = require("express");
const app = express();

const placeRouter = require("./routes/place");

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 함수 호출 부분 수정

app.use("/place", placeRouter);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Server is running on ${app.get("port")}`);
});
