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

  render() {
    return (
      <div>
        <ControlBar
          countries={countryList}
          handleOrder={this.handleOrder}
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
        />
        <div className={franchiseListStyles.column}>
          {franchises.map(franchise => {
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

export default FranchiseList
