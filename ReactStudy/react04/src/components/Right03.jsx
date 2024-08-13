import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Right03 = () => {
  const data = useContext(AppContext);

  return (
    <div>
      <h1>Right03</h1>
      <button
        onClick={() => {
          data.setState(data.state + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Right03;
