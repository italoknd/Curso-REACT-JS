import React from 'react'

export default function Random({maxNum, minNum}){
  
let random = Math.random() * (maxNum - minNum) + minNum;

  return(
    <div>
      <h1>DESAFIO: Número aleatorio.</h1>
      <p>Abaixo será exibido um número aleatório entre {maxNum} e {minNum}</p>
      <p>{random.toFixed(2)}</p>
    </div>
  )
}