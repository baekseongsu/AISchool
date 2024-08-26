import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product/1");
  };

  return (
    <div>
      <h1>HomePage</h1>
      <Link to={"/about"}>About페이지로 이동</Link>
      <br />
      <button onClick={goToProduct}>Product페이지로 이동</button>
    </div>
  );
};

export default HomePage;
