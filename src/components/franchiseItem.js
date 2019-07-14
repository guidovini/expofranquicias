import React from 'react'

// Components
import Logo from './logo'
import FranchiseField from './franchiseField'

// Utils
import currencyFormatter from '../utils/currencyFormatter'
import removeSquaredMeters from '../utils/removeSquaredMeters'
import renderCategories from '../utils/renderCategories'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const Franchise = ({ franchise }) => {
  const {
    nombre,
    categoria,
    concepto,
    aniosOperacion,
    numeroLocales,
    tamanoLocal,
    disponibilidadTerritorial,
    paisOrigen,
    tiempoRetornoInversion,
    inversion,
  } = franchise

  return (
    <div className={franchiseItemStyles.container}>
      <div
        className={franchiseItemStyles.imageBox}
        data-testid="franchise-logo"
      >
        <Logo imgName={`${nombre}.jpg`} />
      </div>

      {
        // <div className={franchiseItemStyles.category}>
        //   {renderCategories(categoria)}
        // </div>
      }

      <div className={franchiseItemStyles.data}>
        <h3
          className="title is-4 has-text-grey-dark"
          data-testid="franchise-name"
        >
          {nombre}
        </h3>
        <p
          className="subtitle is-6 has-text-grey-dark"
          style={{
            fontSize: '1.125rem',
            opacity: '0.7',
          }}
          data-testid="franchise-concept"
        >
          {concepto}
        </p>

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
                style={{ marginRight: '0.3rem' }}
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

        <div className={franchiseItemStyles.labelData}>
          {disponibilidadTerritorial && (
            <div data-testid="franchise-territory">
              <FranchiseField
                field={'disponibilidadTerritorial'}
                fieldContent={disponibilidadTerritorial}
              />
            </div>
          )}

          {paisOrigen && (
            <div data-testid="franchise-countryOrigin">
              <FranchiseField field={'paisOrigen'} fieldContent={paisOrigen} />
            </div>
          )}

          {tiempoRetornoInversion && (
            <div data-testid="franchise-roi">
              <FranchiseField
                field={'tiempoRetornoInversion'}
                fieldContent={tiempoRetornoInversion}
              />
            </div>
          )}
        </div>

        <div
          className={franchiseItemStyles.field}
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            flexGrow: '1',
          }}
          data-testid="franchise-investment"
        >
          <h4 className={franchiseItemStyles.priceTitle}>
            Inversión Aproximada Desde
          </h4>
          <p className={franchiseItemStyles.price}>
            {
              // <span>$ </span>
            }
            {currencyFormatter(inversion)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Franchise
