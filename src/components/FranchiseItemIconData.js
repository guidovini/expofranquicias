import React from 'react'

// Utils
import removeSquaredMeters from '../utils/removeSquaredMeters'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseItemIconData = ({ franchise }) => {
  const { aniosOperacion, numeroLocales, tamanoLocal } = franchise

  return (
    <div className={franchiseItemStyles.iconData}>
      {aniosOperacion && (
        <div
          className={franchiseItemStyles.iconRow}
          data-testid="franchise-years"
        >
          <span
            className="icon is-medium"
            style={{ color: '#aaa', marginRight: '0.4rem' }}
          >
            <i className="fas fa-lg fa-business-time" />
          </span>
          <span
            className={franchiseItemStyles.fieldContent}
            style={{ marginRight: '0.3em' }}
          >
            {aniosOperacion}
          </span>
          <span
            className={franchiseItemStyles.fieldTitle}
            style={{ marginRight: '1.5em' }}
          >
            {' '}
            años de operación
          </span>
        </div>
      )}

      {numeroLocales && (
        <div
          className={franchiseItemStyles.iconRow}
          data-testid="franchise-locations"
        >
          <span
            className="icon is-medium"
            style={{ color: '#aaa', marginRight: '0.4rem' }}
          >
            <i className="fas fa-lg fa-store" />
          </span>
          <span
            className={franchiseItemStyles.fieldContent}
            style={{ marginRight: '0.3em' }}
          >
            {numeroLocales}
          </span>
          <span
            className={franchiseItemStyles.fieldTitle}
            style={{ marginRight: '1.5em' }}
          >
            {' '}
            {numeroLocales > 1 ? 'locales' : 'local'}
          </span>
        </div>
      )}

      {tamanoLocal && (
        <div
          className={franchiseItemStyles.iconRow}
          data-testid="franchise-size"
        >
          <span
            className="icon is-medium"
            style={{ color: '#aaa', marginRight: '0.4rem' }}
          >
            <i className="fas fa-lg fa-ruler" />
          </span>
          <span
            className={franchiseItemStyles.fieldContent}
            style={{ marginRight: '0.3rem', marginBottom: '-0.25rem' }}
          >
            {removeSquaredMeters(tamanoLocal)}
          </span>
          <span
            className={franchiseItemStyles.fieldTitle}
            style={{ marginRight: '0.65rem' }}
          >
            m<sup>2</sup>
          </span>
        </div>
      )}
    </div>
  )
}

export default FranchiseItemIconData
