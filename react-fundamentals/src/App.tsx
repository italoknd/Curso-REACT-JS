import "./App.css";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro.jsx";
import Props from "./components/basicos/Props.jsx";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio.jsx";
import Familia from "./components/basicos/Familia.jsx";
import FamiliaMembro from "./components/basicos/FamiliaMembro.jsx";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicionais/ParOuImpar.jsx";
import ChildrenRender from "./components/condicionais/ChildrenRender.jsx";

function App() {
  return (
    <div className="cards-container">
      <Card titulo="Condicionais Parte 2" color="#329">
        <ChildrenRender />
      </Card>
      <Card titulo="Condicionais Parte 1 - Impar ou Par" color="#329">
        <ParOuImpar numero={9} />
      </Card>
      <Card titulo="Desafio Lista de Produtos" color="#3c9">
        <ListaProdutos />
      </Card>
      <Card titulo="Repetição" color="#b2f">
        <ListaAlunos />
      </Card>
      <Card titulo="Componentes Com Filhos" color="#e42">
        <Familia sobrenome="Pedroza">
          <FamiliaMembro nome="Italo" />
          <FamiliaMembro nome="Daniel" sobrenome="Sabino" />
          <FamiliaMembro nome="Hugo" />
        </Familia>
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
