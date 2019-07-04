import React from 'react'

import Logo from './logo'
import FranchiseField from './franchiseField'

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

  const renderCategories = category => {
    if (Array.isArray(category)) {
      return category.map(subCategory => (
        <p className={franchiseItemStyles.subCategory} key={subCategory}>
          {subCategory}
        </p>
      ))
    } else {
      return (
        category && (
          <p className={franchiseItemStyles.subCategory}>{category}</p>
        )
      )
    }
  }

  return (
    <div className={franchiseItemStyles.container}>
      <div className={franchiseItemStyles.imageBox}>
        <Logo imgName={`${nombre}.jpg`} />
      </div>

      {
        //   <div className={franchiseItemStyles.category}>
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
          <FranchiseField field={'tamanoLocal'} fieldContent={tamanoLocal} />
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
            <span>$ </span>
            {inversion}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Franchise
