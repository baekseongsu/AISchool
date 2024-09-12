import React, { useRef, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  // const [member, setMember] = useState({});

  const id_Ref = useRef();
  const pw_Ref = useRef();
  const nickName_Ref = useRef();

  const navigate = useNavigate();
  const handleJoin = async (e) => {
    e.preventDefault();

    let member = {
      id: id_Ref.current.value,
      pw: pw_Ref.current.value,
      nickName: nickName_Ref.current.value,
    };

    let res = await api.post("/join", { member: member });
    console.log(res.data);

    if (res.data.result === "회원가입 success") {
      alert("회원가입성공!");
      navigate("/");
    } else {
      alert("회원가입실패..");
    }
  };
  return (
    <div>
      <form onSubmit={handleJoin}>
        <input type="text" placeholder="아이디" name="id" ref={id_Ref} />
        <br />
        <input
          type="text"
          placeholder="닉네임"
          name="nick"
          ref={nickName_Ref}
        />
        <br />
        <input type="password" placeholder="비밀번호" name="pw" ref={pw_Ref} />
        <br />

        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default JoinForm;
