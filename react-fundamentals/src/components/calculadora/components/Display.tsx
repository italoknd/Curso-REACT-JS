import React from "react";
import "./display.css"

interface IDisplayValue {
  value: string;
}

const Display = (props: IDisplayValue) => {
  return <div className="display">{props.value}</div>;
};

export default Display;
