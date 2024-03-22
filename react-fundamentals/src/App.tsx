import "./App.css";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro.jsx";
import Props from "./components/basicos/Props.jsx";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio.jsx";
import Familia from "./components/basicos/Familia.jsx";

function App() {
  return (
    <div className="cards-container">
      <Card titulo="Componentes Com Filhos" color="#e42">
        <Familia  />
      </Card>
      <Card titulo="Desafio Número Aleatório" color="#2B6">
        <NumeroAleatorio max_num={100} min_num={1} />
      </Card>
      <Card titulo="Primeiro Contato" color="#44A">
        <Primeiro />
      </Card>
      <Card titulo="Trabalhando Com Props" color="#B49">
        <Props
          titulo="Segundo Componente"
          subtitulo="Criatividade Máxima!"
          nota={6.78}
          aluno="Italo Pedroza"
        />
      </Card>
    </div>
  );
}

export default App;
