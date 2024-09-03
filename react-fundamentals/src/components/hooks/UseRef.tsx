import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseRef() {
  const [value1, setValue1] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>([]);
  const [mergedValue, setMergedValue] = useState<string>("");

  const inputRef = useRef("");
  const input2Ref = useRef("");
  const count = useRef(0);

  useEffect(() => {
    input2Ref.current.focus();
    const lastPos = value1[value1.length - 1] ?? "";
    setMergedValue(mergedValue + lastPos);
  }, [value1]);

  useEffect(() => {
    inputRef.current.focus();
    const lastPos = value2[value2.length - 1] ?? "";
    setMergedValue(mergedValue + lastPos);
  }, [value2]);

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
        <span className="color-white">{mergedValue}</span>
        <span className="color-white">
          [<span style={{ color: "red" }}>{count.current}</span>]
        </span>
        <br />
        <br />
      </div>
      <input
        type="text"
        value={value1}
        ref={inputRef}
        onChange={(e) => setValue1(e.target.value)}
      />
      <SectionTitle title="Exercício 02" />
      <div className="flex justify-center">
        <input
          type="text"
          value={value2}
          ref={input2Ref}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
}
