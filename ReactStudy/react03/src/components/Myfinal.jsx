import React from "react";
import { useRef, useState, useEffect } from "react";

const Myfinal = () => {
  // 1. start 버튼을 클릭했을 때 컴퓨터 주사위, 사용자 주사위가 랜덤하게 다른 주사위로 바꿔주세요
  // 2. 주사위 눈의 크기를 비교해서 ComScore 또는 UserScore 값을 1증가 시켜주세요!
  // 3. ComScore 또는 UserScore값이 먼저 10에 도달하게 되는 순간 결과를 출력해주세요(Com WIN or User WIN
  let dice = [
    "img/dice1.png",
    "img/dice2.png",
    "img/dice3.png",
    "img/dice4.png",
    "img/dice5.png",
    "img/dice6.png",
  ];
  const cpuimgRef = useRef();
  const userimgRef = useRef();
  const [userScore, setuserScore] = useState(0);
  const [cpuScore, setcpuScore] = useState(0);
  const [userDice, setuserDice] = useState(0);
  const [cpuDice, setcpuDice] = useState(0);
  const [res, setres] = useState("");
  const [num, setNum] = useState(0);
  let userDicescore = 0;
  let cpuDicescore = 0;
  let edituserScore = 0;
  let editcpuScore = 0;

  function start() {
    setres("");
    userDicescore = Math.floor(Math.random() * 6);
    cpuDicescore = Math.floor(Math.random() * 6);

    cpuimgRef.current.src = dice[cpuDicescore];
    userimgRef.current.src = dice[userDicescore];
    // setuserDice(dice[userDicescore]);
    // setcpuDice(dice[cpuDicescore]);

    if (userDicescore > cpuDicescore) {
      setuserScore(userScore + 1);
      edituserScore = userScore + 1;
    } else if (userDicescore < cpuDicescore) {
      setcpuScore(cpuScore + 1);
      editcpuScore = cpuScore + 1;
    }
    console.log(userScore, cpuScore);

    if (userScore === 10) {
      setuserScore(0);
      setcpuScore(0);
      cpuimgRef.current.src = dice[0];
      userimgRef.current.src = dice[0];
    } else if (cpuScore === 10) {
      setuserScore(0);
      setcpuScore(0);
      cpuimgRef.current.src = dice[0];
      userimgRef.current.src = dice[0];
    }
    // if (edituserScore === 10) {
    //   setres("User WIN");
    // } else if (editcpuScore === 10) {
    //   setres("Com WIN");
    // }

    setNum(num + 1);
  }

  useEffect(() => {
    console.log("useEffect");

    if (userScore === 10) {
      setres("User WIN");
    } else if (cpuScore === 10) {
      setres("Con WIN");
    }
  }, [cpuScore, userScore]);
  // [] -> dependency Array (의존 배열)
  // 의존 배열에 아무것도 넣어주지 않는다면 componentDidMount와 같은 역할을 하게 됨, 즉 페이지가 처음 렌더링 될 때만 실행됨

  return (
    <div>
      <h1>DICE GAME</h1>
      <p>클릭수 : {num}</p>
      <button onClick={start}>Start</button>

      <div className="dice">
        <img src="img/dice1.png" ref={cpuimgRef}></img>
        <h1>Com Score : {cpuScore}</h1>
      </div>
      <div className="dice">
        <img src="img/dice1.png" ref={userimgRef}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {res}</h1>
    </div>
  );
};

export default Myfinal;
