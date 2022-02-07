import './App.css'
import React from 'react'
import PrimeiroComponente from '../components/basicos/PrimeiroComponente'
import ComParametro from '../components/basicos/ComParametro'
import Fragmento from '../components/basicos/Fragmento'
import Random from './basicos/Random'
import Card from './layout/Card'
import './layout/card.css'
import Familia from './basicos/Familia'
import FamiliaMembro from './basicos/FamiliaMembro'
import ListaAlunos from './repetição/ListaAlunos'
import ListaProdutos from './repetição/ListaProdutos'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="cards-flex">
      <Card titulo="Lista de Produtos" color="#E2AEDD">
        <ListaProdutos></ListaProdutos>
      </Card>
      
      <Card titulo="Repetição" color="">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="Familia">
        <Familia sobrenome="sobrenome teste" idade="23">
          <FamiliaMembro nome="Italo" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Pedro"/>
          <FamiliaMembro />
        </Familia>
      </Card>

      <Card titulo="Exemplo de card" color="#496DDB">
        <Random min={1} max={100} random />
      </Card>

      <Card titulo="Fragmento" color="#533A7B">
        <Fragmento />
      </Card>

      <Card titulo="Primeiro Componente" color="#EE8434">
        <PrimeiroComponente />
      </Card>

      <Card titulo="Com parametros" color="#5EC2B7">
        <ComParametro titulo="Situação do aluno" aluno="Italo" nota={8.3} />
      </Card>
    </div>
  </div>
)
