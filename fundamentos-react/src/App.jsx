import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'

export default function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <Card titulo="Titulo do Card"/>

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
