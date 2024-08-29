import React, { useState } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseState() {
  const [count, setCount] = useState<number>(0);
  const [name, setName]=useState<string>('Italo')

  return (
    <div className="main-container-hooks">
      <div className="info">
        <h2>useEffect</h2>
      </div>
      <div className="preview">
        <p>Permite executar efeitos colaterais em componentes funcionais.</p>
      </div>

      <SectionTitle title="Exercício 01" />
      <div className="exercise-box">
        <p style={{color: 'white'}}>{count}</p>
        <button className="button" style={{color: 'white'}} onClick={() => setCount(count + 1)}>+</button>
        <button className="button" style={{color: 'white'}} onClick={() => setCount(count - 1)}>-</button>

        <div className="text-container">
          <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
          <textarea value={name}/>
        </div>
      </div>
    </div>
  );
}
