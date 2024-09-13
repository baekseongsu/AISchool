import React, { useRef, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const id_Ref = useRef();
  const pw_Ref = useRef();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    let loginMember = {
      id: id_Ref.current.value,
      pw: pw_Ref.current.value,
    };

    let res = await api.post("./login", { loginMember: loginMember });
    console.log(res.data);

    if (res.data.result === "로그인 success") {
      alert("로그인성공!");

      // 로그인 성공 시, session Storge에 보관
      // -> 객체를 문자열로 변환 필요 JSON.stringify()
      console.log(JSON.stringify(res.data));

      sessionStorage.setItem("userInfo", JSON.stringify(res.data));

      navigate("/");
    } else {
      alert("로그인실패..");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="아이디" name="id" ref={id_Ref} />
        <br />
        <input type="password" placeholder="비밀번호" name="pw" ref={pw_Ref} />
        <br />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default LoginForm;
