import React, { Component } from 'react'

import ControlBarStyles from './controlBar.module.scss'

class ControlBar extends Component {
  componentDidMount() {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
          document.body.classList.add('header-not-at-top')
        } else {
          document.body.classList.remove('header-not-at-top')
        }
      })
      observer.observe(document.querySelector('#top-of-site-pixel-anchor'))
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
        placeholder="Encuentra franquicias por nombre"
      />
    )
  }

  render() {
    return (
      <div
        className="control-bar"
        // style={{
        //   position: 'relative',
        //   backgroundColor: '#eee',
        //   borderRadius: '15px',
        //   padding: '1rem 0',
        //   paddingBottom: '0.25rem',
        //   marginTop: '3rem',
        //   marginBottom: '2rem',
        //   display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'space-evenly',
        //   alignItems: 'flex-start',
        //   flexWrap: 'wrap',
        // }}
      >
        <div
          className="field is-horizontal"
          // style={{ flexBasis: '16rem' }}
          style={{ flexShrink: '1' }}
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
          style={{ flexShrink: '1' }}
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
          style={{ flexShrink: '0' }}
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
