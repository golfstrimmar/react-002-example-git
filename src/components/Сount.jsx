import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      {/* <h2>{value}</h2> */}
      {/* <input */}
      {/* type="text" */}
      {/* // value={value}
      // onChange={(event) => setValue(event.target.value)} */}
      {/* /> */}
      <button onClick={inc}>incr</button>
      <button onClick={dec}>decr</button>
    </div>
  );
};

export default Counter;
