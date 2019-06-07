import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Navbar from './navbar'

import HeaderStyles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.header}>
    <div className={HeaderStyles.headerRight}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div className={HeaderStyles.headerLeft}>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
