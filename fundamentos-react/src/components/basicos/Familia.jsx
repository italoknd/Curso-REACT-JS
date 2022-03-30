import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){

  return(
    <div>
      <FamiliaMembro nome="Italo" sobrenome="Pedroza"></FamiliaMembro>
      <FamiliaMembro nome="Marcos" sobrenome={props.sobrenome}></FamiliaMembro>
      <FamiliaMembro nome="Fabrício" {...props}></FamiliaMembro>
    </div>
  )
}