import React, { useRef } from "react";
import api from "../api";

const Join = () => {
  const id_Ref = useRef();
  const nick_Ref = useRef();
  const pw_Ref = useRef();

  const handleJoin = async (e) => {
    e.preventDefault();

    let member = {
      id: id_Ref.current.value,
      nick: nick_Ref.current.value,
      pw: pw_Ref.current.value,
    };

    let res = await api.post("/join", { member: member });
    console.log("회원가입 테스트", res.data);
  };
  return (
    <div>
      <form onSubmit={handleJoin}>
        <input type="text" placeholder="아이디" name="id" ref={id_Ref} />
        <br />
        <input type="text" placeholder="닉네임" name="nick" ref={nick_Ref} />
        <br />
        <input type="password" placeholder="비밀번호" name="pw" ref={pw_Ref} />
        <br />

        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default Join;
