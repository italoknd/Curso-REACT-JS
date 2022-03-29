import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

//para renderizar um exemplo, comente os que você não deseja exibir
//não é possível renderizar mais de um exemplo utilizando a mesma const el

//ex 1 jsx
const el = document.getElementById('root')
ReactDOM.render('hello, react!', el)

//ex 2 jsx
ReactDOM.render(
  <div>
    <em>Renderizando conteúdo utilizando sintaxe JSX</em>
  </div>,
  el
) //renderizando em jsx não se faz mais uso de aspas simples para renderizar mensagens, uma vez que, agora utilizando o jsx, podemos escrever HTML dentro do JavaScript

//ex 3 jsx
const msg = <p>Olá, JSX!</p>

ReactDOM.render(<div>{msg}</div>, el)

//ex 4 renderizando componente
ReactDOM.render(
  <div>
    <App />
  </div>,
  el
)
