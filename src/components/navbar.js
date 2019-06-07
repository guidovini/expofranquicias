import React from 'react'
import { Link } from 'gatsby'

import NavbarStyles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={NavbarStyles.navbar}>
      <ul>
        <li className={NavbarStyles.navbarItem}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={NavbarStyles.navbarItem}>
          <Link to="/franquicias-disponibles">Franquicias Disponibles</Link>
        </li>
        <li className={NavbarStyles.navbarItem}>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
