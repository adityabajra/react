import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((oldcount) => oldcount + 1);
    setCount((oldcount) => oldcount + 1);
    setCount((oldcount) => oldcount + 1);
  }

  return (
    <div>
      {/* <Blog>
        <h3>Blog Title 1</h3>
        <p> Blog Description 1</p>
      </Blog>
      <Blog>
        <h3>Blog Title 2</h3>
        <p> Blog Description 2</p>
      </Blog> */}
      <h3>{count}</h3>
      <button onClick={handleIncrement}> Increment</button>
    </div>
  );
}
