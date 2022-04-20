import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <aside>
      <nav className="Menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/param/legal">Param #01</Link>
          </li>
          <li>
            <Link to="/param/123">Param #02</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
