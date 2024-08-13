import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { TextContext } from "../App";

const SubItem03 = () => {
  const data = useContext(TextContext);

  const textRef = useRef();

  function click() {
    data.setText(textRef.current.value);
  }

  return (
    <div>
      <input ref={textRef}></input>
      <button onClick={click}>전송</button>
    </div>
  );
};

export default SubItem03;
