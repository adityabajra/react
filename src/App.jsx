import React, { useEffect } from "react";
import { useState } from "react";
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <h3>Width: {width}</h3>
    </div>
  );
}
