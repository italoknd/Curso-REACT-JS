import React from "react";
import "./hooks.css";

interface IUseCallbackButton {
  inc: (val: number) => void;
}

const UseCallbackButtons: React.FC<IUseCallbackButton> = React.memo(
  (props: IUseCallbackButton) => {
    console.log("rendered");
    return (
      <div className="flex flex-col gap-10 mt-2">
        <button onClick={() => props.inc(6)}>+6</button>
        <button onClick={() => props.inc(12)}>+12</button>
        <button onClick={() => props.inc(18)}>+18</button>
      </div>
    );
  }
);

export default UseCallbackButtons;
