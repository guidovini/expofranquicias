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
      <div className={franchiseItemStyles.imageBox}>
        <Logo imgName={`${nombre}.jpg`} />
      </div>

      {
        // <div className={franchiseItemStyles.category}>
        //   {renderCategories(categoria)}
        // </div>
      }

      <div className={franchiseItemStyles.data}>
        <h3 className="title is-4 has-text-grey-dark">{nombre}</h3>
        <p className="subtitle is-6 has-text-grey-dark">{concepto}</p>

        {aniosOperacion && (
          <FranchiseField
            field={'aniosOperacion'}
            fieldContent={aniosOperacion}
          />
        )}

        {numeroLocales && (
          <FranchiseField
            field={'numeroLocales'}
            fieldContent={numeroLocales}
          />
        )}

        {tamanoLocal && (
          <FranchiseField
            field={'tamanoLocal'}
            fieldContent={removeSquaredMeters(tamanoLocal)}
          />
        )}

        {disponibilidadTerritorial && (
          <FranchiseField
            field={'disponibilidadTerritorial'}
            fieldContent={disponibilidadTerritorial}
          />
        )}

        {paisOrigen && (
          <FranchiseField field={'paisOrigen'} fieldContent={paisOrigen} />
        )}

        {tiempoRetornoInversion && (
          <FranchiseField
            field={'tiempoRetornoInversion'}
            fieldContent={tiempoRetornoInversion}
          />
        )}

        <div
          className={franchiseItemStyles.field}
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            flexGrow: '1',
          }}
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
