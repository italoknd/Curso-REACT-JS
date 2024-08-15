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

  getValue(value: string): void {
    console.log(value);
  }

  render() {
    return (
      <div>
        <h2>Calculadora</h2>
        <Display value={100} />
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
