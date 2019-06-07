import React from 'react'
import { Link } from 'gatsby'

import NavbarStyles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={NavbarStyles.navbar}>
      <ul>
        <li className={NavbarStyles.navbarList}>
          <Link to="/" className={NavbarStyles.navbarItem}>
            Inicio
          </Link>
        </li>
        <li className={NavbarStyles.navbarList}>
          <Link
            to="/franquicias-disponibles"
            className={NavbarStyles.navbarItem}
          >
            Franquicias Disponibles
          </Link>
        </li>
        <li className={NavbarStyles.navbarList}>
          <Link to="/contacto" className={NavbarStyles.navbarItem}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
