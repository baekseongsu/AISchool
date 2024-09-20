import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="logo">로고</div>
      <nav>
        {/* 가운데 정렬 */}
        <ul className="menu">
          <li>
            <Link to="/">포트폴리오</Link>
          </li>
          <li>
            <a
              href="https://github.com/baekseongsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              블로그
            </a>
          </li>
          <li>
            <a
              href="https://github.com/baekseongsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        {/* 오른쪽 정렬 */}
        <ul className="auth">
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/join">회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
