import "./App.css";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro.jsx";
import Props from "./components/basicos/Props.jsx";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio.jsx";

function App() {
  return (
    <div className="cards-container">
      <Card titulo="Desafio Número Aleatório">
        <NumeroAleatorio max_num={100} min_num={1} />
      </Card>
      <Card titulo="Primeiro Contato">
        <Primeiro />
      </Card>
      <Card titulo="Trabalhando Com Props">
        <Props
          titulo="Segundo Componente"
          subtitulo="Criatividade Máxima!"
          nota={6.78}
          aluno="Italo Pedroza"
        />
      </Card>
      <Card titulo="Trabalhando Com Props">
        <Props
          titulo="Segundo Componente"
          subtitulo="Criatividade Máxima!"
          nota={6.78}
          aluno="Italo Pedroza"
        />
      </Card>
      <Card titulo="Trabalhando Com Props">
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
