import React, { Component } from "react";

//interface
import { IContador } from "./interfaceContador";

//componentes
import Display from "./Display";
import FormContador from "./FormContador";
import Controles from "./Controles";

export default class Contador extends Component<IContador> {
  state = {
    numeroDisplay: 10,
    passoIncremento: 20,
    passoDecremento: 10
  };

  inc = () => {
    this.setState({
      numeroDisplay: this.state.numeroDisplay + this.state.passoIncremento
    });
  };

  dec = () => {
    this.setState({
      numeroDisplay: this.state.numeroDisplay - this.state.passoDecremento
    });
  };

  inputValorInc = (valor: number) => {
    this.setState({
      passoIncremento: valor
    });
  };

  inputValorDec = (valor: number) => {
    this.setState({
      passoDecremento: valor
    });
  };

  render(): React.ReactNode {
    return (
      <div>
        <Display numero={this.state.numeroDisplay} />
        <FormContador
          passoIncremento={this.state.passoIncremento}
          passoDecremento={this.state.passoDecremento}
          setNovoValorInc={this.inputValorInc}
          setNovoValorDec={this.inputValorDec}
        />
        <Controles decrementar={this.dec} incrementar={this.inc} />
      </div>
    );
  }
}
