import React from "react";
import "./Menu.css";

const Menu = (props: unknown) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
