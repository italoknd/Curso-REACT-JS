/* eslint-disable no-unreachable */
import React from 'react'
import alunos from '../../data/alunos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const alunosLi = alunos.map(aluno => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome}, nota: {aluno.nota}
      </li>
    )
  })

  return (
    <div>
      <ul>{alunosLi}</ul>
    </div>
  )
}
