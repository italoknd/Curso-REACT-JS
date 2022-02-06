import React from "react"

export default function ComParametro(props){
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

  return (
    <div >
      <h1>{props.titulo}</h1>
      <h2>{ props.aluno }</h2>
      <p>{props.aluno} tem nota {props.nota}</p>
      <strong>{status}</strong>
    </div>
  )
}