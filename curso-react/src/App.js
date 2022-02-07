
import './App.css'

function App() {
  const name = 'Italo'
  const newName = name.toUpperCase()
  const url = "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

  function sum(a, b) {
    return a+b;
  }

  return (
    <div className="App">
      <h1>Ola React!</h1>
      <p>Olá, {name}</p>
      <p> -&gt; {newName}</p>
      <p>Soma: { sum(2, 5)}</p>
      <img src={url} alt="My image"/
      >
    </div>
  )
}

export default App
