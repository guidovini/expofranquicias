import React, { Component } from 'react'

import ControlBarStyles from './controlBar.module.scss'

class ControlBar extends Component {
  orderBySelector = () => {
    return (
      <select
        value={this.props.orderBy}
        onChange={e => {
          this.props.handleOrder(e.target.value)
        }}
      >
        <option value="alpha">Alfabeticamente</option>
        <option value="lower-price">Menor Precio</option>
        <option value="higher-price">Mayor Precio</option>
      </select>
    )
  }

  filterByCountrySelector = countries => {
    return (
      <select
        value={this.props.filterBy}
        onChange={e => {
          this.props.handleFilter(e.target.value)
        }}
      >
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

  searchBySelector = () => {
    return (
      <input
        type="text"
        value={this.props.searchBy}
        onChange={e => {
          this.props.handleSearch(e.target.value)
        }}
      />
    )
  }

  render() {
    return (
      <div className={ControlBarStyles.control}>
        <form>
          <label>
            Ordenar:
            {this.orderBySelector()}
          </label>

          <label>
            Filtrar franquicia por país:
            {this.filterByCountrySelector(this.props.countries)}
          </label>

          <label>
            Buscar:
            {this.searchBySelector()}
          </label>

          <button
            onClick={e => {
              e.preventDefault()
              this.props.resetControlBar()
            }}
          >
            x
          </button>
        </form>
      </div>
    )
  }
}

export default ControlBar
