import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";
import { IDadosUsuario } from "../../interfaces/basicos-interface/basico";

const IndiretaPai = props => {
  const [dadosUsuario, setDadosUsuario] = useState(null);

  const fornecerInformacoesDoUsuario = (dadosUsuario: IDadosUsuario) => {
    setDadosUsuario(() => dadosUsuario);
  };
  return (
    <div>
      <h3>Pai</h3>
      <p>Dados Recebidos do Componente Filho: {dadosUsuario}</p>
      <IndiretaFilho quandoClicar={fornecerInformacoesDoUsuario} />
    </div>
  );
};

export default IndiretaPai;
