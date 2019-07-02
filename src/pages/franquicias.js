import React from 'react'

import getData from '../data/getData'

const ListadoFranquicias = () => {
  const { franquicias, listaPaises } = getData()
  // console.log(franquicias, listaPaises)

  return (
    <div className="section">
      <h1 className="title">Franquicias Disponibles</h1>
      <div className="container">
        {franquicias.map(franquicia => {
          return (
            <div key={franquicia.id || franquicia.nombre} className="box">
              <p className="title is-5">{franquicia.nombre}</p>
              <p className="content">{franquicia.categoria}</p>
              <p className="content">{franquicia.paisOrigen}</p>
              <p className="content">{franquicia.inversion}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ListadoFranquicias as default }
