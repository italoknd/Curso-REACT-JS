import React from "react";
import "./display.css"

interface IDisplayValue {
  value: number;
}

const Display = (props: IDisplayValue) => {
  return <div className="display">{props.value}</div>;
};

export default Display;
