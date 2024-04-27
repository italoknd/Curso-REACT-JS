import React, { Component } from "react";
import { IContador } from "./interfaceContador";

export default class Display extends Component<IContador> {
  render(): React.ReactNode {
    return (
      <div>
        <h2>Contagem Atual: {this.props.numero}</h2>
      </div>
    );
  }
}
