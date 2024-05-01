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
    passoDecremento: 10,
  };

  inc = () => {
    this.setState({
      numeroDisplay: this.state.numeroDisplay + this.state.passoIncremento,
    });
  };

  dec = () => {
    this.setState({
      numeroDisplay: this.state.numeroDisplay - this.state.passoDecremento,
    });
  };

  render(): React.ReactNode {
    return (
      <div>
        <Display numero={this.state.numeroDisplay} />
        <FormContador />
        <Controles decrementar={this.dec} incrementar={this.inc} />
      </div>
    );
  }
}
