import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FranchiseList from '../components/FranchiseList'

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
