import React, { useState } from "react";
import "./button.css";
import { IButton } from "../interface/index";

export default function Button(props: IButton) {
  const getValueFromButton = (value: string) => {
    setDisplayValue(Number(value))
  };
  const [displayValue, setDisplayValue] = useState<number>(0);

  return (
    <button className={`button ${props.labelClass}`} onClick={e=> }>{props.label}</button>
  );
}
