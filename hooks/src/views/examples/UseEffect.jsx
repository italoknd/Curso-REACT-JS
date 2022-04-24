import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(n) {
  if (n < 0) {
    return 'Não existe fatorial de número menor que 0.'
  }

  if (n == 0) {
    return 1
  }

  return calcFactorial(n - 1) * n
}

function parOuImpar(num) {
  const n = parseInt(num)

  if (n % 2 === 1) {
    return 'Número impar'
  }
  if (n === 0) {
    return 'Número nulo'
  }
  if (n < 0) {
    return 'Número negativo.'
  } else {
    return 'Número par'
  }
}

const UseEffect = props => {
  const [number, setNumber] = useState(1)
  const [factorial, setFactorial] = useState(number)

  useEffect(
    function () {
      setFactorial(calcFactorial(number))
    },
    [number]
  )

  const [numero, setNumero] = useState(1)
  const [resultado, setResultado] = useState(1)

  useEffect(
    function () {
      setResultado(parOuImpar(numero))
    },
    [numero]
  )

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial}</span>
        </div>
        <input
          className="input"
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Desafio #01" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="red text">{resultado}</span>
        </div>
        <input
          type="number"
          className="input"
          value={numero}
          onChange={e => setNumero(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseEffect
