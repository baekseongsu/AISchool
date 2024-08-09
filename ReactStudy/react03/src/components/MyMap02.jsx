import { useRef, useState } from "react";
import React from "react";

const MyMap02 = () => {
  const colorArray = ["red", "orange", "yellow", "green", "blue"];
  const [myColor, setMyColor] = useState("black");

  let mystyle = {
    width: "100px",
    height: "100px",
    display: "inline-block",
  };

  // function click(color) {
  //   // 두번째 줄에 있는 div 태그 색상 변경
  //   setMyColor(e.target.style.backgroundColor);
  //   setMyColor(color);
  // }

  return (
    <div>
      <h1>색상 변경하기</h1>
      {colorArray.map((data) => (
        <div
          // js spread : 객체 or 배열이 가지고 있는 내용을 펼치겠습니다
          style={{ ...mystyle, backgroundColor: data }}
          // 콜백함수 이용해서 data 넘겨주기
          onClick={() => setMyColor(data)} // click함수를 넣는대신 바로 setMyColor(color)를 넣어도 됨 함수에 복잡한 로직이 들어가지 않는이상 따로 함수를 만드는 것보단 바로 넣어주는게 효율적
        ></div>
      ))}
      <h1>선택한 색상</h1>
      <div style={{ ...mystyle, backgroundColor: myColor }}></div>
    </div>
  );
};

export default MyMap02;
