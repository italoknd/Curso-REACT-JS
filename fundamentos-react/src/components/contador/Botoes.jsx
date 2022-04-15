import React from "react";

export default function Botoes(props){
  return(
    <div>
      <button className='button' onClick={props.incremento}>+</button>
      <button className='button' onClick={props.decremento}>-</button>
      <button className='button' onClick={props.multiploInc}>M+</button>
      <button className='button' onClick={props.multiploDec}>M-</button>
    </div>
  )
}