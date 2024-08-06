import React from "react";

const Myteam = (props) => {
  let mystyle = {
    border: "1px solid black",
    textAlign: "center",
    width: "600px",
    margin: "10px auto",
  };
  return (
    <div style={mystyle}>
      <p>{props.dep}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default Myteam;
