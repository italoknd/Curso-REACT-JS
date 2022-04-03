import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  const [novoNome, setNome] = useState(<strong>Não se sabe</strong>);
  const [novoIdade, setIdade] = useState(<strong>Desconhecida</strong>);
  const [novoIsNerd, setIsNerd] = useState(<strong>Não se sabe</strong>);

  function getInfos(nome, idade, isNerd){
    console.log(nome, idade, isNerd);
    setNome(nome)
    setIdade(idade)
    setIsNerd(isNerd)
  }

  return(
    <div>
      <h2>Pai</h2>
      <p>Nome: {novoNome}</p>
      <p>Idade {novoIdade}</p>
      <p>É nerd? {novoIsNerd ? 'Sim' : 'Não'}</p>
      <IndiretaFilho fornencerInfos={getInfos}></IndiretaFilho>
    </div>
  )
}