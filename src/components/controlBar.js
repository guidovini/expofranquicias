import React, { Component } from 'react'

import ControlBarStyles from './controlBar.module.scss'

class ControlBar extends Component {
  handleOrder = e => {
    this.props.handleOrder(e.target.value)
  }

  handleFilter = e => {
    this.props.handleFilter(e.target.value)
  }

  handleSearch = e => {
    this.props.handleChange(e.target.value)
  }

  filterByCountrySelector = countries => {
    return (
      <select value={this.state.filterBy} onChange={this.handleFilter}>
        <option value="all">Todos</option>
        {countries.map(country => {
          return (
            <option value={`${country}`} key={country}>
              {country}
            </option>
          )
        })}
      </select>
    )
  }

  render() {
    return (
      <div className={ControlBarStyles.control}>
        <form>
          <label>
            Ordenar:
            <select value={this.state.orderBy} onChange={this.handleOrder}>
              <option value="alpha">Alfabeticamente</option>
              <option value="lower-price">Menor Precio</option>
              <option value="higher-price">Mayor Precio</option>
            </select>
          </label>

          <label>
            Filtrar franquicia por país:
            {this.filterByCountrySelector(this.props.countries)}
          </label>

          <label>
            Buscar:
            <input
              type="text"
              value={this.state.searchBy}
              onChange={this.handleSearch}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default ControlBar
