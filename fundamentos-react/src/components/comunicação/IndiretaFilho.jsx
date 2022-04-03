import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const idadeAleatoria = () => parseInt(Math.random() * (100-1) + 1)

  return (
    <div>
      <h2>Filho</h2>
      <button
        className="btn btn-primary"
        onClick={function (e) {
          props.fornencerInfos('Italo', idadeAleatoria, true)
        }}
      >
        Fornecer Informações
      </button>
    </div>
  )
}
