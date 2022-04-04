import React, { Component } from 'react'
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

  setPasso = e => {
    this.setState({
      passo: +e.target.value //o + serve para converter o valor de string pra number
    })
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h3>{this.state.numero}</h3>
        <div className='input-area'>
          <label htmlFor="">Passo:</label>
          <input
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <div>
          <button className='button' onClick={this.incremento}>+</button>
          <button className='button' onClick={this.decremento}>-</button>
          <button className='button' onClick={this.multiploInc}>M+</button>
          <button className='button' onClick={this.multiploDec}>M-</button>
        </div>
      </div>
    )
  }
}
