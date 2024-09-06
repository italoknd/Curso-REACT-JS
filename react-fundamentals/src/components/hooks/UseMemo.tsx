import React, { useState, useMemo } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

const sum = (value1: number, value2: number): number => {
  while (Date.now() < Date.now() + 2000) {}
  return value1 + value2;
};

export default function UseMemo() {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [value3, setValue3] = useState<number>(0);

  const result = useMemo(() => sum(value1, value2), [value1, value2]);
  //use memo retorna um valor e só é executado quando uma de suas dependencias sofre alteração

  return (
    <div className="main-container-hooks">
      <div className="info">
        <h2>useMemo</h2>
      </div>
      <div className="preview">
        <p>Retorna um valor memoizado.</p>
      </div>

      <br />
      <SectionTitle title="Exercício 01" />

      <div className="flex flex-col gap-10 mt-2">
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(Number(e.target.value))}
        />
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(Number(e.target.value))}
        />
        <input
          type="number"
          value={value3}
          onChange={(e) => setValue3(Number(e.target.value))}
        />

        <p>Resultado da soma: {result}</p>
      </div>
    </div>
  );
}
