import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";
import { IDadosUsuario } from "../../interfaces/basicos-interface/basico";

const IndiretaPai = props => {
  const [nome, setNome]= useState<string>("")
  const [idade, setIdade]= useState<string>("")

  const fornecerInformacoesDoUsuario = (dadosUsuario: IDadosUsuario) => {
    setNome(dadosUsuario.nome)
    setIdade(dadosUsuario.idade)
  };
  return (
    <div>
      <h3>Pai</h3>
      <p>Dados Recebidos do Componente Filho: </p>
      {nome} - {idade}
      <IndiretaFilho quandoClicar={fornecerInformacoesDoUsuario} />
    </div>
  );
};

export default IndiretaPai;
