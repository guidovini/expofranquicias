import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FranchiseList from "../components/franchiseList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Franquicias Disponibles</h1>
    <FranchiseList />
  </Layout>
)

export default IndexPage
