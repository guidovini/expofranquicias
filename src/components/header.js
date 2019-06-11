import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-link"
    role="navigation"
    aria-label="main navigation"
  >
    <Helmet>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      ></script>
    </Helmet>

    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <header className="title is-4 has-text-light has-text-weight-light">
          {siteTitle}
        </header>
      </Link>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start"></div>

      <div className="navbar-end">
        <Link to="/" className="navbar-item is-size-6">
          <p>Inicio</p>
        </Link>

        <Link to="/franquicias-disponibles" className="navbar-item is-size-6">
          <span className="icon">
            <i className="fas fa-briefcase"></i>
          </span>
          <span>&nbsp;</span>
          <p>Franquicias Disponibles</p>
        </Link>

        <Link to="/contacto" className=" is-size-6 navbar-item">
          Contacto
        </Link>
      </div>
    </div>
  </nav>
)

// <div className="navbar-item has-dropdown is-hoverable">
// <a className="navbar-link is-size-6">
//   <p>Info</p>
// </a>

// <div className="navbar-dropdown">
//   <a className="navbar-item">Acerca de Nosotros</a>
//   <a className="navbar-item">FAQ - Preguntas Frecuentes</a>

//   <hr className="navbar-divider" />
//   <a className="navbar-item">Report an issue</a>
// </div>
// </div>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
