import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
