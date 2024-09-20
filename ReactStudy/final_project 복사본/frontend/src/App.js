import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [nick, setNick] = useState(null);

  return (
    <div className="App">
      <Header nick={nick} setNick={setNick}></Header>
      <Routes>
        <Route path="/" element={<Content></Content>}></Route>
        <Route
          path="/login"
          element={<Login setNick={setNick}></Login>}
        ></Route>
        <Route path="/join" element={<Join></Join>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
