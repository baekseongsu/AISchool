import React, { useState } from "react";

const MyState03 = () => {
  const [num, setnum] = useState(0);
  function plus() {
    setnum(num + 1);
  }
  function minus() {
    if (num > 0) {
      setnum(num - 1);
    }
  }
  function reset() {
    setnum(0);
  }
  return (
    <div>
      <div>
        <p>Like! ❤️{num}</p>
      </div>
      <div>
        <button onClick={plus}>+1증가</button>
        <button onClick={minus}>-1감소</button>
        <button onClick={reset}>초기화</button>
      </div>
    </div>
  );
};

export default MyState03;
