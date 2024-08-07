import React, { useRef, useState } from "react";

const MyRef02 = () => {
  let index = 0;
  const imgRef = useRef();
  let list = ["img/꼬마돌.jpeg", "img/알통몬.jpeg", "img/근육몬.png"];

  function before() {
    if (index === 0) {
      index = 2;
    } else {
      index = index - 1;
    }

    imgRef.current.src = list[index];
  }

  function next() {
    if (index === list.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    imgRef.current.src = list[index];
  }

  return (
    <div>
      <img src={list[index]} ref={imgRef}></img>
      <br></br>

      <button onClick={before}>Before</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default MyRef02;
