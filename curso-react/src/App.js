import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import ListaDeRender from './components/ListaDeRender'
import StateLift from './components/StateLift'
import {useState} from 'react'
import Saudacao from './components/Saudacao'

function App() {
  const name = 'Italo'
  const newName = name.toUpperCase()
  const url =
    'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  function sum(a, b) {
    return a + b
  }

  const nome = 'Maria'

  const meusItens = ['React', 'Vue', 'Angular'];

  const [userName, setUserName] = useState();

  return (
    <div className="App">
      <h1>Ola React!</h1>
      <p>Olá, {name}</p>
      <p> -&gt; {newName}</p>
      <p>Soma: {sum(2, 5)}</p>
      <img src={url} alt="My image" />

      <HelloWorld />
      <Frase />
      <SayMyName nome="Italo" />
      <SayMyName nome="Bot" />
      <SayMyName nome={nome} />

      <Pessoa 
        nome="Italo"
        foto="https://via.placeholder.com/150"
        idade="28"
        profissao="Desenvolvedor"
      />
      
      <List />

      <Evento numero="1" />

      <Form />

      <Condicional />

      <ListaDeRender itens={meusItens}/>
      <ListaDeRender itens/>

      <StateLift setUserName={setUserName}/>
      <Saudacao userName={userName}/>
    </div>
  )
}

export default App
