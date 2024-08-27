import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import ProductDetailPage2 from "./page/ProductDetailPage2";
import PrivateRouter from "./page/PrivateRouter";
import Login from "./page/Login";
import { useEffect, useState } from "react";

// Routes : 요청 URL을 묶어서 관리하는 컴포넌트
// Route : 요청 URL에 맞는 화면 컴포넌트를 렌더링 해주는 컴포넌트

function App() {
  // 로그인 상태를 보관하는 state 생성
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    console.log("현재 로그인 상태:", loginState);
  }, [loginState]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/product" element={<ProductPage></ProductPage>}></Route>
        <Route
          path="/product/:prd_no"
          element={<ProductDetailPage></ProductDetailPage>}
        ></Route>
        <Route
          path="/productQuery"
          element={<ProductDetailPage2></ProductDetailPage2>}
        ></Route>

        <Route
          path="/login"
          element={<Login setLoginState={setLoginState}></Login>}
        ></Route>
        <Route
          path="/mypage"
          element={<PrivateRouter state={loginState}></PrivateRouter>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
