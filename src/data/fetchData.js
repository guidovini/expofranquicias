import { graphql, useStaticQuery, StaticQuery } from 'gatsby'

const query = graphql`
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
`

const fetchData = () => {
  const data = useStaticQuery(query)

  const franchises = data.allGoogleSheetListadoFranquiciasRow.nodes
  console.log('franchises', franchises)
  return franchises
}

export { fetchData as default }
