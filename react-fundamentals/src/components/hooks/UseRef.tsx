import React, { useState, useEffect } from "react";
import SectionTitle from "../layout/SectionTitle";
import "./hooks.css";

export default function UseState() {
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
      <SectionTitle title="Exercício 01 - ???? (Usando useRef)" />
    </div>
  );
}
