import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="title">Página no Encontrada</h1>
    <p className="content">
      Regresar al <Link to="/">inicio</Link>
    </p>
  </Layout>
)

export default NotFoundPage
