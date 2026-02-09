import React, { useRef, useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus input </button>
      <p>Typed name: {username}</p>
    </div>
  );
}
