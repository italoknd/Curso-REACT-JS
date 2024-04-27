import React, { Component } from "react";
import "./contador.css";

export default class Controles extends Component {
  inc = () => {
    this.props.incrementar();
  };

  dec = () => {
    this.props.decrementar();
  };

  render(): React.ReactNode {
    return (
      <div>
        <button className="control-button" onClick={this.inc}>
          +
        </button>
        <button className="control-button" onClick={this.dec}>
          -
        </button>
      </div>
    );
  }
}
