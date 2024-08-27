import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    // QueryString(쿼리스트링) 방식
    // - 다음 페이지로 이동할 때 데이터를 전달하는 방식(?key=value)
    navigate("/productQuery?prd_no=15");
  };

  return (
    <div>
      <h1>ProductPage</h1>
      <button onClick={goToProduct}>ProductDetail2으로 이동</button>
    </div>
  );
};

export default ProductPage;
