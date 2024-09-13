import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const [userInfo, setUserInfo] = useState(null);

  console.log(JSON.parse(sessionStorage.getItem("userInfo")));

  // 로그아웃 기능 구현
  const logout = () => {
    alert("다음에 안오면 발목 돌려버린다 ㅎㅎ");
    sessionStorage.removeItem("userInfo");
    setUserInfo(null);
  };

  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")));
  }, []);

  return (
    <div>
      <h1>React-Node 연동 실습</h1>

      {userInfo === null ? (
        <div>
          <Link to={"/join"}>회원가입</Link>
          <Link to={"/login"}>로그인</Link>
        </div>
      ) : (
        <div>
          <Link to={"/mypage"}>마이페이지</Link>
          <button onClick={logout}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Main;
