import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Random from './components/basicos/Random'

export default function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <Random 
        maxNum={3}
        minNum={7}/>
      <ComParametro 
        situacao="Situação do Aluno:" 
        aluno="Italo" 
        nota={9.3} />
      <Primeiro />
    </div>
  )
}
