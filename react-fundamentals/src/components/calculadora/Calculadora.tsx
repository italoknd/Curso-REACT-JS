import React, { Component } from "react";
import "./calculadora.css";
import Button from "./components/Button";
import { buttons } from "./script/buttons";
import Display from "./components/Display";
import { IButton } from "./interface";

export default class Calculdadora extends Component {
  constructor(props: IButton) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  //states
  state = {
    displayValue: "0",
    // value1: 0,
    // value2: 0,
  };

  //functions
  isNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }

  getValue(value: string): void {
    if (this.isNumber(value)) {
      if (this.state.displayValue.startsWith("0")) {
        this.state.displayValue = "";
      }

      this.setState({
        displayValue: "".concat(this.state.displayValue, value),
      });
      // this.setState({
      //   value1: this.state.value1 + value,
      // });
    } else if (value === "AC") {
      // this.setState({
      //   displayValue: "0",
      // });
    }
  }

  render() {
    return (
      <div>
        <h2>Calculadora</h2>
        <Display value={this.state.displayValue} />
        <div className="calculadora">
          {buttons.map((button: IButton, id: number) => {
            return (
              <Button
                key={id}
                label={button.label}
                labelClass={button.labelClass}
                getValue={this.getValue}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
