import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
// Navbar solution

class Header extends Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    return (
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
              Expofranquicias Ecuador
            </header>
          </Link>

          <div className="navbar-burger burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={
            this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <Link to="/" className="navbar-item is-size-6">
              <p>Inicio</p>
            </Link>

            <Link
              to="/franquicias-disponibles"
              className="navbar-item is-size-6"
            >
              <span className="icon">
                <i className="fas fa-briefcase"></i>
              </span>
              <span>&nbsp;</span>
              <span>Franquicias Disponibles</span>
            </Link>

            <Link to="/contacto" className="navbar-item is-size-6">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header

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
