import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Content from "./pages/Content";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <footer className="Footer">Footer</footer>
      </div>
    </Router>
  );
}

export default App;
