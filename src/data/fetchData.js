import { graphql, useStaticQuery } from 'gatsby'

const fetchData = () => {
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
  // console.log('franquicias', franquicias)
  return franquicias
}

export { fetchData as default }
