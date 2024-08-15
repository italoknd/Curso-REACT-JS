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

  state = {
    displayValue: 0,
  };

  isNumber(value: any): boolean {
    return /^\d+$/.test(value);
  }

  getValue(value: string): void {
    for (const element of buttons) {
      if (this.isNumber(element.label)) {
        console.log("ascasca");
        this.setState({
          displayValue: value,
        });
      } else if (element.label === "AC") {
        this.setState({
          displayValue: "0",
        });
      }
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
