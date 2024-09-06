import React from "react";

const Banner = ({ popular }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${popular.backdrop_path})`, // url() 함수 사용
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          maxWidth: "600px",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 텍스트 가독성을 위한 반투명 배경
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>{popular.title}</h1>
        <br />
        <p>{popular.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
