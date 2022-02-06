import './index.css';
import ReactDOM from 'react-dom'
import React from 'react'

const divPai = document.querySelector('#root')
const tag = <p>Olá react!</p>

ReactDOM.render(
  <h1> {tag} </h1>,

  divPai
)
