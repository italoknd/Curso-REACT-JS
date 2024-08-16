import React, { Component } from "react";
import "./calculator.css";
import Button from "./components/Button";
import { buttons } from "./script/buttons";
import Display from "./components/Display";
import { IButton, ICalculatorState } from "./interface";

export default class Calculdadora extends Component {
  constructor(props: IButton) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  state: ICalculatorState = {
    displayValue: "0",
    operationType: "",
    value1: 0,
  };

  //FUNCTIONS

  //GETTERS
  getValue(value: string): void {
    if (this.isNumber(value) || value === ".") {
      this.addDigitToDisplay(value);
    } else if (value === "AC") {
      this.clearMemory();
    } else if (!this.isNumber(value) && value !== "AC" && value !== "=") {
      this.prepareOperation(value);
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
      result = Number(this.state.value1) - Number(value);
    } else if (this.state.operationType === "*") {
      result = Number(this.state.value1) * Number(value);
    } else if (this.state.operationType === "/") {
      result = Number(this.state.value1) / Number(value);
    }

    return String(result);
  }

  //VALIDATIONS
  startsWithZero() {
    if (this.state.displayValue.startsWith("0")) {
      this.state.displayValue = "";
    }
  }

  isNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }

  //OTHER FUNCTIONS
  prepareOperation(value: string) {
    this.setState({
      operationType: value,
      value1: this.state.displayValue,
      displayValue: "0",
    });
  }

  clearMemory() {
    this.setState({
      displayValue: "0",
      value1: 0,
      operationType: "",
    });
  }

  addDigitToDisplay(value: string) {
    this.startsWithZero(); //CLEAR THE DISPLAY IF INITIAL DIGIT IS 0

    this.setState({
      displayValue: "".concat(this.state.displayValue, value),
    });
  }

  render() {
    return (
      <div>
        <h2>Calculator</h2>
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
