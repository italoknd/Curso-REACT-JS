import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <li className='icons'>
        <FaFacebook />
      </li>
      <li  className='icons'>
        <FaInstagram />
      </li>
      <li  className='icons'>
        <FaLinkedin />
      </li>
    </footer>
  )
}

export default Footer
