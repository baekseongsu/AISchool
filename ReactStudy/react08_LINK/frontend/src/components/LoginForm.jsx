import React, { useState } from "react";
import api from "../api";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    let res = await api.post("./login", { id: id, pw: pw });
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          name="id"
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          name="pw"
          onChange={(e) => setPw(e.target.value)}
        />
        <br />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default LoginForm;
