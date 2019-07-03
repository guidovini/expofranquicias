import React from 'react'

import getData from '../data/getData'

const ListadoFranquicias = () => {
  const { franchises, countryList } = getData()

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
  )
}

export { ListadoFranquicias as default }
