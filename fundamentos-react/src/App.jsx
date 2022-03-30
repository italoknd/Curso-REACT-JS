import './app.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'

export default function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <div className="cards-container">
        <Card titulo="04 - Primeiro Componente" color="#f05">
          <Familia sobrenome="Ferreira" idade={22}/>
        </Card>
        <Card titulo="03 - Random Number Challenge" color="#A2A">
          <Random maxNum={3} minNum={7} />
        </Card>
        <Card titulo="02 - Com Parametro">
          <ComParametro situacao="Situação do Aluno:" aluno="Italo" nota={9.3} />
        </Card>
        <Card titulo="01 - Primeiro Componente" color="#fb5">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}
