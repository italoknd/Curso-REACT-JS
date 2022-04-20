import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <aside>
      <nav className="Menu">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
