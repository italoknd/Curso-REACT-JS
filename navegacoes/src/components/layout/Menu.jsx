import React from "react";
import './Menu.css'

function Menu(){
  return(
    <aside>
      <nav className="Menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu