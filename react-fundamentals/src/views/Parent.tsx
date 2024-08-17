import React from "react";
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import "./parent.css";
import { BrowserRouter } from "react-router-dom";

const Parent = () => {
  return (
    <div className="parent">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
};

export default Parent;
