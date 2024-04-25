import React, { useState } from "react";

const Input = () => {
  const [valor, setValor] = useState("Incial");

  const alterarValor = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <input value={valor} onChange={alterarValor} />
    </div>
  );
};

export default Input;
