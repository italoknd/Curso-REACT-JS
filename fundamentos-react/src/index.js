import './index.css';
import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './components/basicos/PrimeiroComponente'
import ComParametro from './components/basicos/ComParametro'

const divPai = document.querySelector('#root')

ReactDOM.render(
  <h1>
    <PrimeiroComponente></PrimeiroComponente>
    <ComParametro 
      titulo="Situação do aluno"
      aluno="Italo" 
      nota={8.3}>
    </ComParametro>
    <ComParametro 
      titulo="Situação do aluno"
      aluno="Pedro" 
      nota={3.3}>
    </ComParametro>
  </h1>,

  divPai
)
