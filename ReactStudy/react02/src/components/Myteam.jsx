import React from "react";

const Myteam = ({ dep, name }) => {
  // JSX에서 inline style을 적용할 때는 객체 형식으로 적용해야 한다
  return (
    <div
      style={{
        border: "1px solid black",
        textAlign: "center",
        width: "600px",
        margin: "10px auto",
      }}
    >
      <p>{dep}</p>
      <p>{name}</p>
    </div>
  );
};
// defaultProps : 데이터를 전달받지 않았을 때 기본적으로 적용되는 데이터
Myteam.defaultProps = {
  name: "구인구직중",
};

export default Myteam;
