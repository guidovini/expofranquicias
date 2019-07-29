import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Adquiere Franquicias para Ecuador" />
    <div className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-6">
            <h2
              className="title has-text-grey-dark has-text-centered"
              style={{ fontWeight: '300' }}
            >
              Sitio Web para encontrar{' '}
              <strong style={{ fontWeight: '400' }}>
                Franquicias Internacionales
              </strong>{' '}
              disponibles en Ecuador
            </h2>
            <div
              className="section"
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}
            >
              <Link
                to="/franquicias-disponibles"
                className="button is-large is-link"
              >
                Buscar Franquicias
              </Link>
              <Link
                to="/contacto"
                className="button is-large is-dark is-outlined"
                style={{ flexGrow: '0' }}
              >
                Más Información
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              <p>Un servicio de: </p>
              <br />
              <a href="http://www.ecuafranquicias.com" target="_blank">
                <img src={require('../images/ecuafranquicias-logo.png')} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
