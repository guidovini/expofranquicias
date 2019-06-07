import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FranchiseList from "../components/franchiseList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Franquicias Disponibles</h2>
    <FranchiseList />
  </Layout>
)

export default IndexPage
