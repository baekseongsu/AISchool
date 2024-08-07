import React, { useState, useRef } from "react";
// useRef : 컴포넌트에서 특정 태그를 선택할 수 있는 기능

const MyRef01 = () => {
  const inputRef = useRef(); // 태그를 지정할 수 있는 inputRef라는 변수 생성
  const [text, settext] = useState("");

  // useRef사용전
  function change(e) {
    settext(e.target.value);
  }
  function apply() {
    let h = document.getElementById("1");
    h.innerText = text;
  }

  // useRef사용후
  function change2(e) {
    // inputRef.current : 현재 가르키는 태그객체
    //                    태그를 바로 사용할 수 있게끔 객체로 가져오는 작업
    settext(inputRef.current.value);
  }

  return (
    <div>
      {/* useRef사용전
      <input ref={inputRef} onChange={change}></input>
      <button onClick={apply}>출력</button>
      <h1 id="1"></h1>
      */}

      {/* useRef사용후 */}
      <input ref={inputRef}></input>
      <button onClick={change2}>출력</button>
      <h1 id="1">{text}</h1>
    </div>
  );
};

export default MyRef01;
