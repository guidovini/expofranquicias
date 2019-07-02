import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const ListadoFranquicias = () => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSheetListadoFranquiciasRow {
        nodes {
          id
          nombre
          categoria
          concepto
          aniosOperacion
          numeroLocales
          tamanoLocal
          disponibilidadTerritorial
          paisOrigen
          tiempoRetornoInversion
          inversion
        }
      }
    }
  `)

  const franquicias = data.allGoogleSheetListadoFranquiciasRow.nodes

  return (
    <div>
      <h1>Franquicias Disponibles</h1>
      {franquicias.map(franquicia => {
        console.log(franquicia.id)
        return (
          <div key={franquicia.id}>
            <p>{franquicia.nombre}</p>
            <p>{franquicia.inversion}</p>
          </div>
        )
      })}
    </div>
  )
}

export { ListadoFranquicias as default }
