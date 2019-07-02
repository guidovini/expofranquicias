import React, { Component } from 'react'

// Components
import FranchiseItem from './franchiseItem'
import ControlBar from './controlBar'

// Data
import franchiseSelector from '../selectors/franchisesSelector'
import { franchises, countryList } from '../data/franchiseList'

// Styles
import franchiseListStyles from './franchiseList.module.scss'

class FranchiseList extends Component {
  state = {
    orderBy: 'alpha',
    filterBy: 'all',
    searchBy: '',
  }

  componentDidMount() {
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
    const { orderBy, filterBy, searchBy } = this.state
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
              franchise.investment && (
                <FranchiseItem
                  franchise={franchise}
                  key={`${franchise.name} + ${franchise.investment}`}
                />
              )
            )
          })}
        </div>
      </div>
    )
  }
}

// <div
// id="top-of-site-pixel-anchor"
// className={franchiseListStyles.topAnchor}
// ></div>

export default FranchiseList
