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

  const franchises = data.allGoogleSheetListadoFranquiciasRow.nodes
  // console.log('franchises', franchises)
  return franchises
}

export { fetchData as default }
