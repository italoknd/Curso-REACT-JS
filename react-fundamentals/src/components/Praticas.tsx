import React from "react";

import "../App.css";
import Card from "./layout/Card";
import Primeiro from "./basicos/Primeiro";
import Props from "./basicos/Props";
import NumeroAleatorio from "./basicos/NumeroAleatorio";
import Familia from "./basicos/Familia";
import FamiliaMembro from "./basicos/FamiliaMembro";
import ListaAlunos from "./repeticao/ListaAlunos";
import ListaProdutos from "./repeticao/ListaProdutos";
import ParOuImpar from "./condicionais/ParOuImpar";
import ChildrenRender from "./condicionais/ChildrenRender";
import IndiretaPai from "./comunicacao/IndiretaPai";
import Input from "./form/Input";
import Contador from "./contador/Contador";
import Mega from "./mega/Mega";

export default function Pratica() {
  return (
    <div className="cards-container">
      <Card titulo="Mega Sena" color="#21d">
        <Mega qtd={6} />
      </Card>
      <Card titulo="Componente Baseado Em Classe" color="#2b8">
        <Contador numero={2} />
      </Card>
      <Card titulo="Componente Controlado" color="#b26">
        <Input />
      </Card>
      <Card titulo="Comunicação Indireta" color="#b91">
        <IndiretaPai />
      </Card>
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
        {/* <Familia sobrenome="Pedroza">
          <FamiliaMembro nome="Italo" />
          <FamiliaMembro nome="Daniel" sobrenome="Sabino" />
          <FamiliaMembro nome="Hugo" />
        </Familia> */}
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
