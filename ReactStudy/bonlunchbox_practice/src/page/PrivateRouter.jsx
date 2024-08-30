import React from "react";
import GoodsDetail from "./GoodsDetail";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ auth }) => {
  console.log("로그인 상태 : ", auth);

  return auth ? (
    <GoodsDetail></GoodsDetail>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
};

export default PrivateRouter;
