import React, { Component } from 'react'
import { graphql, useStaticQuery, StaticQuery } from 'gatsby'

// Components
import FranchiseItem from './franchiseItem'
import ControlBar from './controlBar'

// Data
import getData from '../data/getData'
import franchiseSelector from '../selectors/franchisesSelector'
// import fetchData from '../data/fetchData'

// Styles
import franchiseListStyles from './franchiseList.module.scss'

class FranchiseList extends Component {
  state = {
    orderBy: 'alpha',
    filterBy: 'all',
    searchBy: '',
    franchises: [],
    countryList: [],
  }

  componentDidMount() {
    console.log(this.props.franchises)
    const { franchises, countryList } = getData()
    console.log(franchises, countryList)

    this.setState({
      franchises,
      countryList,
    })

    function scrollWin(x, y) {
      window.scrollBy(x, y)
    }
  }

  handleOrder = val => {
    this.setState({
      orderBy: val,
    })
  }

  handleFilter = val => {
    this.setState({
      filterBy: val,
    })
  }

  handleSearch = val => {
    this.setState({
      searchBy: val,
    })
  }

  resetControlBar = () => {
    // this.setState({ orderBy: 'alpha', filterBy: 'all', searchBy: '' })
    this.setState({ searchBy: '' })
  }

  render() {
    const { orderBy, filterBy, searchBy, franchises, countryList } = this.state
    const filteredFranchises = franchiseSelector(
      franchises,
      orderBy,
      filterBy,
      searchBy
    )

    return (
      <div>
        <ControlBar
          countries={countryList}
          handleOrder={this.handleOrder}
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          resetControlBar={this.resetControlBar}
          orderBy={orderBy}
          filterBy={filterBy}
          searchBy={searchBy}
        />
        <div className={franchiseListStyles.column} id="stickyContent">
          {filteredFranchises.map(franchise => {
            return (
              franchise.inversion && (
                <FranchiseItem
                  franchise={franchise}
                  key={franchise.id || franchise.nombre}
                />
              )
            )
          })}
        </div>
      </div>
    )
  }
}

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

export default props => (
  <StaticQuery
    query={query}
    render={data => {
      const franchises = data.allGoogleSheetListadoFranquiciasRow.nodes
      return <FranchiseList franchises={franchises} {...props} />
    }}
  />
)

// export default FranchiseList
