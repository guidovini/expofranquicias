import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 className="title is-4 has-text-grey-dark">
      Pagina Web para encontrar Franquicias Disponibles en Latinoamerica
    </h2>
    <Link to="/franquicias-disponibles" className="button is-link">
      Buscar Franquicias
    </Link>
  </Layout>
)

export default IndexPage
