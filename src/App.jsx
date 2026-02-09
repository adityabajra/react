import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  function handleIncrement() {
    // setCount(count+1);
    // console.log(count)

    setCount((oldcount) => oldcount + 1);
    setCount((oldcount) => oldcount + 1);
    setCount((oldcount) => oldcount + 1);
  }

  return (
    <div>
      <h3>count:{count}</h3>
      <button onClick={handleIncrement}>Increment</button>

      {isloggedIn && <h3>Welcome</h3>}
      {!isloggedIn && <h3>Please</h3>}

      <button onClick={() => setIsLoggedIn(!isloggedIn)}>
        {isloggedIn ? "login" : "logout"}
      </button>
    </div>
  );
}
