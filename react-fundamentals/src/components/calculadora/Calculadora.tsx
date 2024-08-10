import React, { Component } from "react";
import "./calculadora.css";
import Button from "./components/Button";

export default class Calculdadora extends Component {
  render() {
    return (
      <div>
        <h2>Calculadora</h2>
        <div className="calculadora">
          <Button />
        </div>
      </div>
    );
  }
}
