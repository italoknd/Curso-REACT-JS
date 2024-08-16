import React from "react";
import "./display.css"

interface IDisplayValue {
  value: number;
}

const Display = (props: IDisplayValue) => {
  return <div className="display"><span className="result">{props.value}</span></div>;
};

export default Display;
