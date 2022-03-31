import React from "react";

export default function FamiliaMembro({nome, sobrenome, idade}){

  return(
    <div>
      <p>{nome} <strong>{sobrenome} {idade}</strong></p>
    </div>
  )
} 