import React from "react";

const IndiretaFilho = props => {
  const gerarIdade = (): number => {
    return Math.floor(Math.random() * (100 - 0)) + 0
  }
  return (
    <div>
      <h3>Filho</h3>
      <button onClick={() => props.quandoClicar({ nome: "Italo", idade: gerarIdade() })}>
        Disparar Dados
      </button>
    </div>
  );
};

export default IndiretaFilho;
