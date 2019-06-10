import React from 'react'

import Image from './image'

import franchiseItemStyles from './franchiseItem.module.scss'

const Franchise = ({
  name,
  concept,
  category,
  size,
  sizeUnits,
  investment,
  countryAvailability,
  countryOrigin,
}) => {
  return (
    <div className={franchiseItemStyles.container}>
      <div className={franchiseItemStyles.image}>
        <Image />
      </div>

      <div className={franchiseItemStyles.data}>
        <h3 className="title is-4 has-text-grey-dark">{name}</h3>
        <p className="subtitle is-6 has-text-grey-dark">{concept}</p>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Categoria:</h4>
          <p className={franchiseItemStyles.fieldContent}>{category}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Tamano:</h4>
          <p className={franchiseItemStyles.fieldContent}>
            {size} {sizeUnits}
          </p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>
            Disponibilidad Territorial:
          </h4>
          <p className={franchiseItemStyles.fieldContent}>
            {countryAvailability}
          </p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Pais de Origen:</h4>

          <img
            className={franchiseItemStyles.flag}
            src={require(`../assets/${countryOrigin}.png`)}
            alt={`${countryOrigin} flag`}
            title={countryOrigin}
          />
        </div>

        <div
          className={franchiseItemStyles.field}
          style={{ justifyContent: 'center', flexDirection: 'column' }}
        >
          <h4 className={franchiseItemStyles.priceTitle}>
            Inversion Aproximada
          </h4>
          <p className={franchiseItemStyles.price}>
            <span>$ </span>
            {investment}
          </p>
        </div>
      </div>
    </div>
  )
}

// <p className={franchiseItemStyles.fieldContent}>
// {countryOrigin} &nbsp;
// </p>

export default Franchise
