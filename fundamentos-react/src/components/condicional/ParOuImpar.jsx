import React from "react";

export default function ParOuImpar(props){
const isPar = props.numero % 2 === 0

  return(
    <div>
      { isPar 
        ? <span>Número Par ({props.numero})</span> 
        : <span>Número Impar ({props.numero})</span>
      }
    </div>
  )
}