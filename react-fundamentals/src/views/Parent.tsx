import React from "react";
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import './parent.css'

const Parent = () => {
  return (
    <div className="parent">
      <Menu/>
      <Content/>
    </div>
  );
};

export default Parent;
