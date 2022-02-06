import './App.css'
import React from 'react'
import PrimeiroComponente from '../components/basicos/PrimeiroComponente'
import ComParametro from '../components/basicos/ComParametro'
import Fragmento from '../components/basicos/Fragmento'
import Random from './basicos/Random'
import Card from './layout/Card'
import './layout/card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="cards-flex">
      <Card titulo="Exemplo de card">
        <Random min={1} max={100} random />
      </Card>
      <Card titulo="Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="Primeiro Componente">
        <PrimeiroComponente />
      </Card>
      <Card titulo="Com parametros">
        <ComParametro titulo="Situação do aluno" aluno="Italo" nota={8.3} />
      </Card>
    </div>
  </div>
)
