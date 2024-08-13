import React from "react";
import { useContext } from "react";
import { Colorcontext } from "../App";

const Result = () => {
  const data = useContext(Colorcontext);

  let mystyle = {
    width: "100px",
    height: "100px",
    display: "inline-block",
  };

  return (
    <div>
      <div style={{ ...mystyle, backgroundColor: data.myColor }}></div>
    </div>
  );
};

export default Result;
