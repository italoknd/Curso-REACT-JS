import "./App.css";
import Primeiro from './components/basicos/Primeiro.jsx'
import Props from "./components/basicos/Props.jsx";

function App() {
  return (
    <>
      <p>Olá React!</p>
      <Primeiro/>
      <Props titulo="Segundo Componente" subtitulo="Criatividade Máxima!"/>
    </>
  );
}

export default App;
