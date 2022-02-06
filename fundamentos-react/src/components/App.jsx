import React from 'react'
import PrimeiroComponente from '../components/basicos/PrimeiroComponente'
import ComParametro from '../components/basicos/ComParametro'
import Fragmento from '../components/basicos/Fragmento'
import Random from './basicos/Random'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div id="app">
    <Random 
      min={1}
      max={100}
      random
    />
    <PrimeiroComponente />
    <ComParametro titulo="Situação do aluno" aluno="Italo" nota={8.3} />
    <Fragmento />
  </div>
)
