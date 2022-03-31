import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos() {
  const lista = alunos.map(alunos => {
    return (
      <li key={alunos.id}>
        {alunos.id}) <strong>Nome:</strong> {alunos.nome} &gt;{' '}
        <strong>Nota:</strong> {alunos.nota}
      </li>
    )
  })

  return (
    <div>
      <ul>{lista}</ul>
    </div>
  )
}
