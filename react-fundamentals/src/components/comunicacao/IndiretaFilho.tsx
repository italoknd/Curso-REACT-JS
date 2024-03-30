import React from "react";

const IndiretaFilho = props => {
  return (
    <div>
      <h3>Filho</h3>
      <button onClick={() => props.quandoClicar({ nome: "Italo", idade: 23 })}>
        Disparar Dados
      </button>
    </div>
  );
};

export default IndiretaFilho;
