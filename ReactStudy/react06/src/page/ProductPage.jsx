import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <h1>ProductPage</h1>
      <Link to={"/"}>HomePage로 이동</Link>
    </div>
  );
};

export default ProductPage;
