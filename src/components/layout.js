/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 *
 * Footer conf
 * https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <section
          className="section"
          style={{
            position: 'relative',
            minHeight: 'calc( 100vh - 2.5rem - 12px )',
          }}
        >
          <main
            className="container is-fluid"
            style={{ paddingBottom: '2.5rem', marginBottom: '2rem' }}
          >
            {children}
          </main>
          <footer
            className="footer"
            style={{
              marginRigth: '1rem',
              position: 'absolute',
              bottom: '0',
              width: '90%',
              paddingBottom: '2.5rem',
            }}
          >
            <p>
              Copyright © {new Date().getFullYear()} Expofranquicias Ecuador.
              Todos los derechos reservados.&nbsp;
              <span>
                Un servicio de{' '}
                <a href="http://www.ecuafranquicias.com" target="_blank">
                  Ecuafranquicias
                </a>
              </span>
            </p>
          </footer>
        </section>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
