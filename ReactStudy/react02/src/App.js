import logo from "./logo.svg";
import "./App.css";

// JSX : JavaScript와 Html을 한번에 사용할 수 있는 문법
// --> 사용자 정의태그(컴포넌트)를 만드는 방법

// 규칙1. 출력하고자 하는 태그들은 반드시 하나의 부모 요소로 묶여 있어야한다.
// 규칙2. 표현식 사용 가능하다(Javascript 변수를 html에서 출력할 수 있다)
// 규칙3. 모든 태그는 반드시 여는 태그와 닫는 태그가 존재한다.
// 규칙4. class라는 키워드 대신 className을 사용한다!
function App() {
  let name = "성수";

  return (
    <div>
      <h1 className="test">MyReact01</h1>
      <h1>MyReact02</h1>

      <p>{name}님 환영합니다</p>
    </div>
  );
}

export default App;
