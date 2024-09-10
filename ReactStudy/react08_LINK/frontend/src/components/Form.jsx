import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState("");
  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <input type="submit" value="저장" />
      </form>
    </div>
  );
};

export default Form;
