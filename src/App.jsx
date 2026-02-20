import { useState, useEffect, useRef } from "react";
import "./App.css";
import tasbehImage from "./assets/tasbeh.png";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Tasbeh</h1>
      <div className="countDiv">
        <h2>{count}</h2>
      </div>
      <div>
        <img src={tasbehImage} alt="Tasbeh" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Sanash</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
