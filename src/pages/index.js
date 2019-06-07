import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Pagina web para encontrar tus franquicias preferidas!</h2>
    <Link to="/franquicias-disponibles">Buscar Franquicias</Link>
  </Layout>
)

export default IndexPage
