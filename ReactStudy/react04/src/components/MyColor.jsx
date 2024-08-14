import React from "react";
import { useContext } from "react";
import { Colorcontext } from "../App";

const MyColor = () => {
  const selectColor = useContext(Colorcontext);
  const colorArray = ["red", "orange", "yellow", "green", "blue"];
  let mystyle = {
    width: "100px",
    height: "100px",
    display: "inline-block",
  };

  // const testFun = () => test2;
  // 1. 실행 로직이 한줄이라면 {} 생략 가능하다
  // 2. {} 생략한 경우 함수실행 로직으로 data가 있다면 해당 data를 반환(return) 하겠습니다.

  return (
    <div>
      {colorArray.map((data) => (
        <div
          // js spread : 객체 or 배열이 가지고 있는 내용을 펼치겠습니다
          style={{ ...mystyle, backgroundColor: data }}
          // 콜백함수 이용해서 data 넘겨주기
          onClick={() => selectColor.setMyColor(data)} // click함수를 넣는대신 바로 setMyColor(color)를 넣어도 됨 함수에 복잡한 로직이 들어가지 않는이상 따로 함수를 만드는 것보단 바로 넣어주는게 효율적
        ></div>
      ))}
    </div>
  );
};

export default MyColor;
