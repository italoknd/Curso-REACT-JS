import React, { Component, ReactEventHandler } from "react";
import { IContador } from "./interfaceContador";

export default class FormContador extends Component<IContador> {
  state = {
    numero: this.props.numero,
    passoIncremento: 0,
    passoDecremento: 0,
  };

  inputValorInc: ReactEventHandler<HTMLInputElement> = (e) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({
        passoIncremento: Number(e.target.value),
      });
    }
  };

  inputValorDec: ReactEventHandler<HTMLInputElement> = (e) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({
        passoDecremento: Number(e.target.value),
      });
    }
  };

  render(): React.ReactNode {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className="input-container">
          <label>valor de incremento:</label>
          <input
            type="number"
            value={this.state.passoIncremento}
            onChange={this.inputValorInc}
          />
        </div>
        <div className="input-container">
          <label>valor de decremento:</label>
          <input
            type="number"
            value={this.state.passoDecremento}
            onChange={this.inputValorDec}
          />
        </div>
      </div>
    );
  }
}
