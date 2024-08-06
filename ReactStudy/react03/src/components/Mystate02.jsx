import React from "react";
import { useState } from "react";

const Mystate02 = () => {
  // 예제1
  // 버튼 클릭시 어떤 버튼을 클릭했는지 숫자를 출력해주세요!
  const [num, setNum] = useState(0);
  const [randomnum, setRandomnum] = useState(0);
  const [res, setRes] = useState("");
  function one() {
    setNum(1);
    setRandomnum(Math.floor(Math.random() * 3) + 1);
    if (num === randomnum) {
      setRes("정답");
    } else {
      setRes("땡");
    }
    console.log(num, randomnum, res);
  }
  function two() {
    setNum(2);
    setRandomnum(Math.floor(Math.random() * 3) + 1);
    if (num === randomnum) {
      setRes("정답");
    } else {
      setRes("땡");
    }
  }
  function three() {
    setNum(3);
    setRandomnum(Math.floor(Math.random() * 3) + 1);
    if (num === randomnum) {
      setRes("정답");
    } else {
      setRes("땡");
    }
  }

  return (
    <div>
      <div>
        {/* 자바스크립트에서는 onclick에 넣는 함수에 ()를 붙여줘야하는데 ex)one()이런식으로
        jsx에서 그렇게 해버리면 클릭했을 때가 아니라 바로 one함수를 실행시킨다는 의미가 되어버리기 때문에 ()를 빼줘야함 */}
        <button onClick={one}>1</button>
        <button onClick={two}>2</button>
        <button onClick={three}>3</button>
      </div>
      <div>
        내가 입력한 숫자 : {num}
        <br />
        랜덤한 숫자 : {randomnum}
        <br />
        결과 : {res}
      </div>
    </div>
  );
};

export default Mystate02;
