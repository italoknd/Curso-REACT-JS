import React, { useState, useEffect } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseState() {
  //exemplo 1
  const [count, setCount] = useState<number>(1);
  const [fatorial, setFatorial] = useState<number>(1);

  const calcFatorial = (number: number): number => {
    if (number < 0 || number === 0) return 1;

    return calcFatorial(number - 1) * number;
  };

  useEffect(() => {
    setFatorial(calcFatorial(count));
  }, [count]);

  //exemplo 2
  const [numero, setNumero] = useState<number>(1);
  const [duplicado, setDuplicado] = useState<number>(1);

  useEffect(() => {
    setDuplicado(numero * 2);
  }, [numero]);

  return (
    <div className="main-container-hooks">
      <div className="info">
        <h2>useEffect</h2>
      </div>
      <div className="preview">
        <p>Permite executar efeitos colaterais em componentes funcionais.</p>
      </div>

      <br />
      <SectionTitle title="Exercício 01 - Fatorial (Usando useEffect)" />
      <br />
      <div className="exercise-box">
        <h2 style={{ color: "white" }}>
          Fatorial:{" "}
          <span style={{ color: "#bb3333" }}>
            {count > 0 ? fatorial : "Não existe"}
          </span>
        </h2>
        <br />
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <hr />
      <br />
      <SectionTitle title="Exercício 02 - Duplicação numérica" />
      <input
        type="number"
        value={numero}
        onChange={(e) => {
          setNumero(Number(e.target.value));
        }}
      />
      <h3 style={{ color: "white" }}>Número Duplicado: {duplicado}</h3>
    </div>
  );
}
