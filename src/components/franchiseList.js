import React, { Component } from 'react'

import FranchiseItem from './franchiseItem'
import ControlBar from './controlBar'

import { franchises, countryList } from '../data/franchiseList'
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

  franchiseSelector = (franchises, orderBy, filterBy, searchBy) => {
    return franchises
      .filter(franchise => {
        const searchText = searchBy.toLowerCase().trim()
        return (
          franchise.name.toLowerCase().includes(searchText) ||
          franchise.concept.toLowerCase().includes(searchText)
        )
      })
      .filter(franchise => {
        if (filterBy === 'all') {
          return franchise
        }
        if (franchise.countryOrigin === filterBy) {
          return franchise.countryOrigin === filterBy
        }
      })
      .sort((a, b) => {
        const x = a.name.toLowerCase()
        const y = b.name.toLowerCase()
        if (orderBy === 'alpha') {
          if (x < y) {
            return -1
          }
          if (x > y) {
            return 1
          }
          return 0
        }

        if (orderBy === 'lower-price') return a.investment - b.investment
        if (orderBy === 'higher-price') return b.investment - a.investment
      })
  }

  render() {
    const { orderBy, filterBy, searchBy } = this.state
    const newFranchises = this.franchiseSelector(
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
          {newFranchises.map(franchise => {
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
