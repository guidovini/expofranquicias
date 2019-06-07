import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <i>
          <Link to="/">Inicio</Link>
        </i>
        <i>
          <Link to="/franquicias-disponibles">Franquicias Disponibles</Link>
        </i>
        <i>
          <Link to="/contacto">Contacto</Link>
        </i>
      </ul>
    </nav>
  )
}

export default Navbar
