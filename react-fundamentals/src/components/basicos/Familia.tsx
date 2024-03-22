import React, { cloneElement } from "react";
import { IDadosUsuario } from "../../interfaces/basicos-interface/basico";

const Familia: React.FC<IDadosUsuario> = props => {
  return (
    <>
      {React.Children.map(props.children, (child, index) => {
        return cloneElement(child, { ...props, key: index });
      })}
    </>
  );
};

export default Familia;
