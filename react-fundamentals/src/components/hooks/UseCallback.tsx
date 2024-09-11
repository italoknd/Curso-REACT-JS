import React, { useState, useCallback } from "react";
import UseCallbackButtons from "./UseCallbackButton";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseCallback() {
  const [count, setCount] = useState<number>(0);

  const inc = useCallback(
    (delta: number) => {
      setCount((count) => count + delta);
    },
    [setCount]
  );

  return (
    <div className="main-container-hooks">
      <div className="info">
        <h2>useCallback</h2>
      </div>
      <div className="preview">
        <p>Retorna uma função memoizada.</p>
        <p>Recomendado usar sempre que for passar funções via props.</p>
      </div>

      <br />
      <SectionTitle title="Exercício 01" />
      <UseCallbackButtons inc={inc} />
      <p>
        <strong>{count}</strong>
      </p>
    </div>
  );
}
