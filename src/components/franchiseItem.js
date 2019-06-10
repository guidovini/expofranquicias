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
        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Nombre:</h4>
          <p>{name}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Concepto:</h4>
          <p>{concept}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Categoria:</h4>
          <p>{category}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Tamano:</h4>
          <p>
            {size} {sizeUnits}
          </p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>
            Disponibilidad Territorial:
          </h4>
          <p>{countryAvailability}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Pais de Origen:</h4>
          <p>{countryOrigin}</p>
        </div>

        <div
          className={franchiseItemStyles.field}
          style={{ justifyContent: 'center' }}
        >
          <h4 className={franchiseItemStyles.fieldTitle}>Precio:</h4>
          <p className={franchiseItemStyles.price}>
            <span>$ </span>
            {investment}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Franchise
