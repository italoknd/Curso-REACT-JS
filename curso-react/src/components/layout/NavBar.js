import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <ul className='list'>
        <li className='item'>
          <Link to="/">Home</Link>
        </li>
        <li  className='item'>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className='item'>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
