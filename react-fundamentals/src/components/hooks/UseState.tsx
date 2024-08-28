import React, { useState } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseState() {
  const [count, setCount] = useState<number>(0);
  const [name, setName]=useState<string>('')
  return (
    <div className="main-container-hooks">
      <div className="info">
        <h2>How to use useState</h2>
      </div>

      <SectionTitle title="Exercício 01" />
      <div className="exercise-box">
        <p style={{color: 'white'}}>{count}</p>
        <button className="button" style={{color: 'white'}} onClick={() => setCount(count + 1)}>+</button>
        <button className="button" style={{color: 'white'}} onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}
