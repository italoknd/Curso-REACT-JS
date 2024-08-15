import React from "react";
import "./button.css";
import { IButton } from "../interface/index";

export default function Button(props: IButton) {
  return (
    <button
      className={`button ${props.labelClass}`}
      onClick={props.getValue(props.label)}
    >
      {props.label}
    </button>
  );
}
