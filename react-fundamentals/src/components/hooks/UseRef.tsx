import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseRef() {
  const [value1, setValue1] = useState<string>("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [value1]);

  return (
    <div className="main-container-hooks">
      <div className="info">
        <h2>useRef</h2>
      </div>
      <div className="preview">
        <p>
          Retorna um objeto mutável com a propriedade <strong>.current</strong>.
        </p>
      </div>

      <br />
      <SectionTitle title="Exercício 01" />

      <div className="flex justify-center">
        <span className="color-white">Valor: </span>
        <span className="color-white">{value1}</span>
        <span className="color-white">
          [<span style={{ color: "red" }}>{count.current}</span>]
        </span>

        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício 02" />
    </div>
  );
}
