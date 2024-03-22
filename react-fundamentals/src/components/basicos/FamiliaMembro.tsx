import React from "react";
import { IDadosUsuario } from "../../interfaces/basicos-interface/basico";

const FamiliaMembro = (props: IDadosUsuario) => {
  return (
    <div>
      <p>
        <strong>
          {props.nome} {props.sobrenome}
        </strong>
      </p>
    </div>
  );
};

export default FamiliaMembro;
