import './app.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repetição/ListaAlunos'
import TabelaProduto from './components/repetição/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

export default function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <div className="cards-container">
        <Card titulo="07 - Renderização Condicional" color="#333">
          <ParOuImpar numero={21}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Italo" }}></UsuarioInfo>
          <UsuarioInfo usuario={{ email: "italo@italo.com" }}></UsuarioInfo>
        </Card>
        <Card titulo="06 - Desafio Lista de Produtos" color="#F70">
          <TabelaProduto></TabelaProduto>
        </Card>
        <Card titulo="05 - Renderização de Listas" color="#0D6">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="04 - Familia" color="#f05">
          <Familia sobrenome="Ferreira" idade={22}>
            <FamiliaMembro nome="Italo" sobrenome="Pedroza"></FamiliaMembro>
            <FamiliaMembro nome="Marcos"></FamiliaMembro>
            <FamiliaMembro nome="Fabrício"></FamiliaMembro>
          </Familia>
        </Card>
        <Card titulo="03 - Random Number Challenge" color="#A2A">
          <Random maxNum={3} minNum={7} />
        </Card>
        <Card titulo="02 - Com Parametro">
          <ComParametro
            situacao="Situação do Aluno:"
            aluno="Italo"
            nota={9.3}
          />
        </Card>
        <Card titulo="01 - Primeiro Componente" color="#fb5">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}
