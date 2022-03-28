import React from 'react'

export default function ComParametro({ situacao, aluno, nota }) {
  const status = nota >=7 ? 'Aprovado' : 'Reprovado'

  return (
    <div>
      <div>
        <h2> {situacao} </h2>
        <h3> {aluno}, nota: {nota} </h3>
        <h4>Situação final: {status}</h4>
      </div>
    </div>
  )
}
