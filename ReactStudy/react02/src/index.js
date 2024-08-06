import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import Menu from "./components/Menu";
import reportWebVitals from "./reportWebVitals";
import Myteam from "./components/Myteam";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* 
      props : 컴포넌트로 데이터를 전달하는 방법 
          --> 속성값으로 데이터를 전달
    */}
    {/* <Menu menu="아메리카노" price="4100원"></Menu>
    <Menu menu="카페라떼" price="4500원"></Menu> */}
    <Myteam dep="교육운영부" name="선영표"></Myteam>
    <Myteam dep="전략기획팀" name="강예진"></Myteam>
    <Myteam dep="홍보팀" name="임보미"></Myteam>
    <Myteam dep="기획팀" name="최영화"></Myteam>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
