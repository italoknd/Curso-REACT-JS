import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// const rootEl = document.querySelector("#root");
// const content: string = "Hey there! I'm using react!";

// ReactDOM.createRoot(rootEl).render(
//   <React.StrictMode>
//     <div>{content}</div>
//   </React.StrictMode>
// );
