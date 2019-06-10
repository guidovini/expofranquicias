import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FranchiseList from '../components/franchiseList'

const FranquiciasDisponibles = () => {
  return (
    <Layout>
      <SEO title="Franquicias Disponibles en Ecuador" />
      <h2 className="title is-2 has-text-centered has-text-grey-dark">
        Franquicias Disponibles
      </h2>
      <FranchiseList />
    </Layout>
  )
}

export default FranquiciasDisponibles
