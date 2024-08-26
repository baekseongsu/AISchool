import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";

// Routes : 요청 URL을 묶어서 관리하는 컴포넌트
// Route : 요청 URL에 맞는 화면 컴포넌트를 렌더링 해주는 컴포넌트

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
