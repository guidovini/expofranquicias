import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

// Components
import FranchiseItem from './FranchiseItem'
import ControlBar from './ControlBar'

// Utils
import franchisesSelector from '../selectors/franchisesSelector'
import getCountryList from '../utils/getCountryList'

// Styles
import franchiseListStyles from './franchiseList.module.scss'

class PureFranchiseList extends Component {
  state = {
    orderBy: 'alpha',
    filterBy: 'all',
    searchBy: '',
    franchises: [],
    countryList: [],
  }

  componentDidMount() {
    const franchises = this.props.queryData
    const countryList = getCountryList(franchises)

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

  renderFranchises = filteredFranchises => {
    if (filteredFranchises.length > 0) {
      return filteredFranchises.map(franchise => {
        return (
          franchise.inversion && (
            <FranchiseItem
              franchise={franchise}
              key={franchise.id || franchise.nombre}
            />
          )
        )
      })
    } else {
      return <p data-testid="franchise-list-no-data">No hay resultados.</p>
    }
  }

  render() {
    const { orderBy, filterBy, searchBy, franchises, countryList } = this.state
    const filteredFranchises = franchisesSelector(
      franchises,
      orderBy,
      filterBy,
      searchBy
    )

    return (
      <div data-testid="franchise-list">
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
          {this.renderFranchises(filteredFranchises)}
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

const FranchiseList = props => (
  <StaticQuery
    query={query}
    render={data => {
      const queryData = data.allGoogleSheetListadoFranquiciasRow.nodes
      return <PureFranchiseList queryData={queryData} {...props} />
    }}
  />
)

export default FranchiseList
