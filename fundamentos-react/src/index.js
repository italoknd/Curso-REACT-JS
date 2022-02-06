import './index.css';
import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './components/basicos/PrimeiroComponente'

const divPai = document.querySelector('#root')

ReactDOM.render(
  <h1>
    <PrimeiroComponente></PrimeiroComponente>
  </h1>,

  divPai
)
