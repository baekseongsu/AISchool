import React, { useRef } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const id_Ref = useRef();
  const pw_Ref = useRef();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    let Link_Member = {
      id: id_Ref.current.value,
      pw: pw_Ref.current.value,
    };

    let res = await api.post("/login", { Link_Member: Link_Member });
    console.log("로그인 테스트", res.data);
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

export default Login;
