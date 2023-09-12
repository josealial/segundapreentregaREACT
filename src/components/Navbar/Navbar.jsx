import React from 'react'
import CartWitdget from '../CartWidget/CartWidget'
import Logo from '../../images/Logo.png'
import '../Navbar/Navbar.css'
import {NavLink, Link} from 'react-router-dom'

/* import remera3 from '../images/remera102.jpg' */

const Navbar = () => {
  return (
    <nav className="navbar">
      <label>
        <Link to='/'>
        <img className='Logo' src={Logo} alt="Logo" />
        </Link>
      </label>

      <ul className="navbar-list">
        <h3>ReacT-shirts</h3>
        <li><NavLink to={`/category/t-shirts`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>T-shirts</NavLink></li>
        <li><NavLink to={`/category/pants`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pants</NavLink></li>
        <li><NavLink to={`/category/jackets`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jackets</NavLink></li>
        <li>
          <CartWitdget />
        </li>
      </ul>
    </nav>
  )
}


export default Navbar
