import logo from "./logo.svg";
import "./App.css";
import Left01 from "./components/Left01";
import Right01 from "./components/Right01";
import SubItem01 from "./components/SubItem01";
import { useState, createContext } from "react";
import MyColor from "./components/MyColor";
import Result from "./components/Result";

// 공유공간(context) 생성
export const AppContext = createContext();
export const TextContext = createContext();
export const Colorcontext = createContext();

function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  const [myColor, setMyColor] = useState("black");
  // num, setNum을 Left01과 Right01로 넘겨서
  // Right01에 있는 버튼을 클릭했을 때
  // Left01에 있는 숫자를 바꾸고 싶습니다
  return (
    // <div id="container">
    <div>
      {/* <h1>Root</h1> */}

      <div>
        {/* <div id="grid"> */}
        {/* 
          Provider : 공유공간 허용하겠습니다
          --> 허용된 컴포넌트의 자식 컴포넌트까지 전부 허용 가능함

          value: 공유공간에서 공유하며 사용할 공유값을 지정
        */}
        {/* <AppContext.Provider value={{ state: num, setState: setNum }}>
          <Left01></Left01>
          <Right01></Right01>
        </AppContext.Provider> */}

        {/* <TextContext.Provider value={{ setText }}>
          <h1>Context 실습</h1>
          <h1>다른 컴포넌트에서 입력한 내용 : {text}</h1>
          <SubItem01></SubItem01>
        </TextContext.Provider> */}

        <Colorcontext.Provider value={{ myColor, setMyColor }}>
          <MyColor></MyColor>
          <Result></Result>
        </Colorcontext.Provider>
      </div>
    </div>
  );
}

export default App;
