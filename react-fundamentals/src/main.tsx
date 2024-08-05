import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const rootEl = document.querySelector("#root");
// const content: string = "Hey there! I'm using react!";

// ReactDOM.createRoot(rootEl).render(
//   <React.StrictMode>
//     <div>{content}</div>
//   </React.StrictMode>
// );
