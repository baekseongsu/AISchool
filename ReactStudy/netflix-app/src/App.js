import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import api from "./api";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Moives from "./page/Moives";
import Home from "./page/Home";
import MovieDetail from "./page/MovieDetail";

function App() {
  // const getMovieData = async () => {
  //   const API_URL = "/movie/popular?language=ko-KR&page=1";
  //   const res = await api.get(API_URL);

  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   getMovieData();
  // }, []);

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<Moives></Moives>}></Route>
        <Route path="/movie/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
