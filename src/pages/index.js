import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 className="title">
      Pagina Web para encontrar Franquicias Disponibles en Latinoamerica
    </h2>
    <Link
      to="/franquicias-disponibles"
      className="button is-large is-link is-outlined"
    >
      Buscar Franquicias
    </Link>
  </Layout>
)

export default IndexPage
