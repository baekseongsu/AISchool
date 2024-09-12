import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import JoinForm from "./components/JoinForm";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

// 리엑트 프로젝트 수정 후 터미널 창에 'npm run build'실행하기! ⭐️⭐️⭐️
function App() {
  return (
    <div>
      {/* <h1>React-Node 연동 실습</h1> */}
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/join" element={<JoinForm></JoinForm>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
      </Routes>
      {/* <Form></Form> */}

      {/* <h1>회원가입폼</h1> */}
      {/* <JoinForm></JoinForm> */}

      {/* <h1>로그인폼</h1> */}
      {/* <LoginForm></LoginForm> */}
    </div>
  );
}

export default App;
