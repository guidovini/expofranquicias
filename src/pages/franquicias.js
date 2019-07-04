import React from 'react'

import Layout from '../components/layout'
import getData from '../data/getData'
import fetchData from '../data/fetchData'

const ListadoFranquicias = () => {
  const data = fetchData()
  const { franchises, countryList } = getData(data)

  const renderCategories = category => {
    if (Array.isArray(category)) {
      return category.map(subCategory => (
        <p className="box" key={subCategory}>
          {subCategory}
        </p>
      ))
    } else {
      return category && <p className="box">{category}</p>
    }
  }

  return (
    <Layout>
      <div className="section">
        <h1 className="title">Franquicias Disponibles</h1>
        <div className="container">
          {franchises.map(franchise => {
            return (
              <div key={franchise.id || franchise.nombre} className="box">
                {renderCategories(franchise.categoria)}
                <p className="title is-5">{franchise.nombre}</p>
                <p className="content">{franchise.paisOrigen}</p>
                <p className="content">{franchise.inversion}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export { ListadoFranquicias as default }
