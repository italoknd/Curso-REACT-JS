import React from "react";
import IndiretaFilho from "./IndiretaFilho";
import { IDadosUsuario } from "../../interfaces/basicos-interface/basico";

const IndiretaPai = props => {
  const fornecerInformacoesDoUsuario = (dadosUsuario: IDadosUsuario) => {
    const { nome, idade } = dadosUsuario;
    console.log(`${nome} - ${idade}`);
  };
  return (
    <div>
      <h3>Pai</h3>
      <IndiretaFilho quandoClicar={fornecerInformacoesDoUsuario} />
    </div>
  );
};

export default IndiretaPai;
