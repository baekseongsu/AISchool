import React, { useEffect } from "react";
import { MovieActions } from "../redux/reducers/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const init = () => {
    dispatch(MovieActions.initData({}));
  };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
