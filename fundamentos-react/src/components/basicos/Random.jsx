import React from "react";

export default function randomNumberInterval(props){
const {min, max} = props;
const random = parseInt(Math.random() * (max - min) + min);
  return(
    <div>
        <h1>Valor aleatório:</h1>
        <p><strong>Valor Mínimo: </strong>{min}</p>
        <p><strong>Valor Máximo: </strong>{max}</p>
        <p><strong>Valor escolhido: </strong>{random}</p>
    </div>
  )
}
// const randomNumber = randomNumberInterval(5, 10);
// console.log(randomNumber);
