import "./App.css";
import Primeiro from "./components/basicos/Primeiro.jsx";
import Props from "./components/basicos/Props.jsx";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio.jsx";

function App() {
  return (
    <>
      <h1>Olá React!</h1>
      <Primeiro />
      <Props
        titulo="Segundo Componente"
        subtitulo="Criatividade Máxima!"
        nota={6.78}
        aluno="Italo Pedroza"
      />
      <NumeroAleatorio max_num={100} min_num={1} />
    </>
  );
}

export default App;
