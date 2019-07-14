import React, { Component } from 'react'

import ControlBarStyles from './controlBar.module.scss'

class ControlBar extends Component {
  componentDidMount() {
    // When the user scrolls the page, execute stickyFunction
    window.onscroll = function() {
      stickyFunction()
    }

    // Get the header
    var header = document.getElementById('myHeader')
    var content = document.getElementById('stickyContent')

    // Get the offset position of the navbar
    var sticky = header.offsetTop

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyFunction() {
      if (window.pageYOffset > sticky) {
        content.classList.add('sticky-content')
        document.body.classList.add('header-not-at-top')
      } else {
        content.classList.remove('sticky-content')
        document.body.classList.remove('header-not-at-top')
      }
    }
  }

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
        className="select"
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
        className="input"
        placeholder="Por nombre de franquicia o concepto de negocio"
      />
    )
  }

  render() {
    return (
      <div className="control-bar" id="myHeader" data-testid="controlBar">
        <div
          className="field is-horizontal"
          // style={{ flexBasis: '16rem' }}
          // style={{ flexGrow: '1' }}
        >
          <div className="field-label is-normal">
            <label className="label">Ordenar:</label>
          </div>
          <div className="control">
            <div className="select">{this.orderBySelector()}</div>
          </div>
        </div>

        <div
          className="field is-horizontal"
          // style={{ flexBasis: '18rem' }}
          // style={{ flexGrow: '1' }}
        >
          <div className="field-label is-normal">
            <label className="label">Filtro por país:</label>
          </div>
          <div className="control has-icons-left">
            <span className="select">
              {this.filterByCountrySelector(this.props.countries)}
            </span>
            <span className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </span>
          </div>
        </div>

        <div
          className="field is-horizontal"
          // style={{ flexBasis: '28rem', padding: '0 1rem' }}
          // style={{ flexGrow: '2' }}
          // style={{ flexBasis: '20rem' }}
        >
          <div className="field-label is-normal">
            <label className="label">Buscar:</label>
          </div>
          <div className="control is-expandable" style={{ flexBasis: '28rem' }}>
            {this.searchBySelector()}
          </div>
          <button
            onClick={e => {
              e.preventDefault()
              this.props.resetControlBar()
            }}
            className={ControlBarStyles.buttonTrash}
            // className={'delete is-medium'}
            title="Reiniciar opciones"
            // style={{ margin: '5px' }}
          >
            <span className="icon">
              <i className="fas fa-lg fa-trash"></i>
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default ControlBar
