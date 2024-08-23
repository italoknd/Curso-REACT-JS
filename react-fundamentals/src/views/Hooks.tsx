import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./profiles.css";
import { hooks } from "../data/hooks";
import { IHook } from "../interfaces/basicos-interface/hooks";

export default function Hooks() {
  return (
    <div className="main-container">
      <aside className="menu">
        {hooks.map((hook: IHook, index: number) => {
          return (
            <nav key={index}>
              <ul>
                <li>
                  <NavLink
                    className={(isActive) => (isActive ? "selected-link" : "")}
                    to={`/hooks/${hook.route}`}
                  >
                    Hook: {hook.hook}
                  </NavLink>
                </li>
              </ul>
            </nav>
          );
        })}
      </aside>
      <div className="children">
        <Outlet />
      </div>
    </div>
  );
}
