import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import ProductDetails from "./page/ProductDetails";
import LoginPage from "./page/LoginPage";
import Header from "./components/Header";

/*
  실습1) 각 페이지 컴포넌트를 page폴더 내 생성
  - 헤더 영역 : Header.jsx (components 폴더)
  - 로그인페이지 : LoginPage.jsx
  - 메인페이지 : MainPage.jsx
  - 상품 상세 페이지 : ProductDetails.jsx

  실습2) 페이지 컴포넌트를 화면에 출력할 수 있도록 라우터 설정
  - 로그인 : '/login'
  - 메인 : '/'
  - 상품 상세 페이지 : '/prdDetail'
*/

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route
          path="/prdDetail"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
