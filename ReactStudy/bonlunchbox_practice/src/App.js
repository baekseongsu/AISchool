import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import GoodsList from "./page/GoodsList";
import GoodsDetail from "./page/GoodsDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import PrivateRouter from "./page/PrivateRouter";

/*
  실습1) page폴더 내에 4개의 페이지를 생성하시오
  - 메인페이지(Main), 로그인페이지(Login), 상품전체목록(GoodsList), 상품상세페이지(GoodsDetail)

  실습2) component폴더 내 4개의 컴포넌트를 생성하시오
  - 헤더(Header), 컨텐츠(Content), 푸터(Footer), 상품정보(GoodItem)

  실습3) 페이지를 이동할 수 있도록 URL과 페이지를 연결하시오.
  - Index.js : BrowserRouter
  - App.js : Routes, Route
  [페이지별 경로]
  - 메인 : '/'
  - 로그인 : '/login'
  - 상품전체목록 : '/menulist'
  - 상품상세페이지 : '/menulist/:id'
*/

function App() {
  // 로그인 상태를 보관하는 state
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      {/* 실습) auth, setAuth를 헤더영역에 전달하여 로그인 상태에 따라 로그인/로그아웃이 출력되도록 구현아시오
          - 로그인이 아닌 상태에서 로그인 버튼 클릭 -> 로그인 페이지로 이동
          - 로그아웃 버튼 클릭 -> auth 값을 false로 변경한 후 메인 페이지로 이동 */}
      <Header auth={auth} setAuth={setAuth}></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/login"
          element={<Login setAuth={setAuth}></Login>}
        ></Route>
        <Route path="/menulist" element={<GoodsList></GoodsList>}></Route>
        <Route
          path="/menulist/:id"
          element={<PrivateRouter auth={auth}></PrivateRouter>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
