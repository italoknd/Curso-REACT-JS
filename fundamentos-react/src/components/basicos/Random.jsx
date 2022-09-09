import React, { useState } from 'react'

export default function Random({ maxNum, minNum }) {
  const [randomNum, newRandomNum] = useState(
    Math.floor(Math.random() * maxNum - minNum + 1) + minNum
  )

  return (
    <div>
      <h5>Desafio Número Aleatório:</h5>
      {randomNum}
      <button
        className="btn btn-primary d-flex mt-2"
        style={{ margin: 'auto' }}
        onClick={() =>
          newRandomNum(Math.floor(Math.random() * maxNum - minNum + 1) + minNum)
        }
      >
        Gerar Novo Número
      </button>
    </div>
  )
}
