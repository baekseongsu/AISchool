import React, { useState } from "react";
import api from "../api";

const JoinForm = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [pw, setPw] = useState("");
  const [checkpw, setCheckPw] = useState("");

  const handleJoin = async (e) => {
    e.preventDefault();

    let res = await api.post("./join", {
      id: id,
      nick: nick,
      pw: pw,
      checkpw: checkpw,
    });
    console.log(res.data);
  };
  return (
    <div>
      <form onSubmit={handleJoin}>
        <input
          type="text"
          placeholder="아이디"
          name="id"
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="닉네임"
          name="nick"
          onChange={(e) => setNick(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          name="pw"
          onChange={(e) => setPw(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="checkpw"
          onChange={(e) => setCheckPw(e.target.value)}
        />
        <br />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default JoinForm;
