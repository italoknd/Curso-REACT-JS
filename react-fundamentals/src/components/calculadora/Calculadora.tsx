import React, { Component } from "react";
import "./calculadora.css";
import Button from "./components/Button";
import { buttons } from "./script/buttons";
import Display from "./components/Display";
import { IButton, ICalculatorState } from "./interface";

export default class Calculdadora extends Component {
  constructor(props: IButton) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  //states
  state: ICalculatorState = {
    displayValue: "0",
    operationType: "",
    value1: 0,
    value2: 0,
  };

  //functions
  isNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }

  getValue(value: string): void {
    if (this.isNumber(value)) {
      this.addDigitToDisplay(value);
    } else if (value === "AC") {
      this.clearMemory();
    } else if (value === "+") {
      this.setState({ operationType: value });
      this.separateValues();

      this.setState({ displayValue: "0" });
    } else if (value === "=") {
      const result: string = this.getResult(this.state.displayValue);
      this.setState({ displayValue: result, value1: result });
    }
  }

  getResult(value: string): string {
    let result: number = 0;

    if (this.state.operationType === "+") {
      result = Number(this.state.value1) + Number(value);
    } else if (this.state.operationType === "-") {
      result = Number(this.state.value1) - Number(this.state.value2);
    } else if (this.state.operationType === "*") {
      result = Number(this.state.value1) * Number(this.state.value2);
    } else if (this.state.operationType === "/") {
      result = Number(this.state.value1) / Number(this.state.value2);
    }

    return String(result);
  }

  addDigitToDisplay(value: string) {
    this.startsWithZero(); //CLEAR THE DISPLAY IF INITIAL DIGIT IS 0

    this.setState({
      displayValue: "".concat(this.state.displayValue, value),
    });
  }

  //VALIDATIONS
  startsWithZero() {
    if (this.state.displayValue.startsWith("0")) {
      this.state.displayValue = "";
    }
  }

  //OTHER FUNCTIONS
  separateValues() {
    if (!this.state.value1) {
      this.setState({ value1: this.state.displayValue });
    } else {
      this.setState({ value2: this.state.displayValue });
    }
  }

  clearMemory() {
    this.setState({
      displayValue: "0",
      value1: 0,
      value2: 0,
      operationType: "",
    });
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
