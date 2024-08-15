import React from "react";
import "./button.css";
import { IButton } from "../interface/index";

export default function Button(props: IButton) {
  return (
    <button
      className={`button ${props.labelClass}`}
      onClick={(e) => (props?.getValue ? props?.getValue(props.label) : 0)}
    >
      {props.label}
    </button>
  );
}
