import React, { Component } from 'react'
import Display from './Display'
import PassoForm from '../contador/PassoForm'
import Botoes from './Botoes'
import './contador.css'

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  }

  incremento = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  decremento = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }

  multiploInc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  multiploDec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = novoPasso => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <Display numero={this.state.numero}/>
        <PassoForm 
          passo={this.state.passo}
          setPasso={this.setPasso}  
        />
        <Botoes 
          incremento={this.incremento}
          decremento={this.decremento}
          multiploInc={this.multiploInc}
          multiploDec={this.multiploDec}
        />
      </div>
    )
  }
}
