import React, { useState } from 'react'

export default function Mega(props) {
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce(nums => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [...nums, novoNumero]
      }, [])
      .sort((n1, n2) => n1 - n2)

    return numeros
  }

  function gerarNumeroNaoContido(min, max, array) {
    const random = parseInt(Math.random() * (max - min) + min)

    return array.includes(random)
      ? gerarNumeroNaoContido(min, max, array)
      : random
  }

  const numerosIniciais = Array(props.qtde || 6).fill(0)
  const [numeros, setNumeros] = useState(numerosIniciais)
  const [qtde, setQtde] = useState(props.qtde || 6)

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label htmlFor="">Quantidade de Números: </label>
        <br />
        <input
          type="number"
          min="6"
          max="14"
          value={qtde}
          onChange={_ => {
            setQtde(+_.target.value)
            setNumeros(gerarNumeros(+_.target.value))
          }}
        />
      </div>
      <button
        onClick={_ => setNumeros(gerarNumeros(qtde))}
        className="btn btn-primary"
        style={{
          marginTop: '.6em'
        }}
      >
        Gerar Números
      </button>
    </div>
  )
}
