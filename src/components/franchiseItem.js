import React from 'react'

import Logo from './logo'

import franchiseItemStyles from './franchiseItem.module.scss'

const Franchise = ({ franchise }) => {
  const {
    name,
    concept,
    category,
    size,
    sizeUnits,
    yearsOperation,
    locations,
    investment,
    investmentLocationOnly,
    roiTime,
    countryAvailability,
    countryOrigin,
  } = franchise

  return (
    <div className={franchiseItemStyles.container}>
      <div className={franchiseItemStyles.imageBox}>
        <Logo imgName={`${name}.jpg`} />
      </div>

      <div className={franchiseItemStyles.data}>
        <h3 className="title is-4 has-text-grey-dark">{name}</h3>
        <p className="subtitle is-6 has-text-grey-dark">{concept}</p>

        {category && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>Categoria:</h4>
            <p className={franchiseItemStyles.fieldContent}>{category}</p>
          </div>
        )}

        {yearsOperation && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Años de Operacion:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>{yearsOperation}</p>
          </div>
        )}

        {locations && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Numero de Locales:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>{locations}</p>
          </div>
        )}

        {size && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>Tamano:</h4>
            <p className={franchiseItemStyles.fieldContent}>
              {size} {sizeUnits}
            </p>
          </div>
        )}

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
            src={require(`../assets/flags/${countryOrigin}.png`)}
            alt={`${countryOrigin} flag`}
            title={countryOrigin}
          />
        </div>

        {roiTime && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Tiempo Retorno de Inversion:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>{roiTime}</p>
          </div>
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
            Inversion Aproximada Desde
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

// <div
// className={franchiseItemStyles.field}
// style={{ justifyContent: 'center', flexDirection: 'column' }}
// >
// <h4 className={franchiseItemStyles.priceLocationsTitle}>
//   Inversion Montaje del Local
// </h4>
// <p className={franchiseItemStyles.priceLocations}>
//   <span>$ </span>
//   {investmentLocationOnly}
// </p>
// </div>

// <p className={franchiseItemStyles.fieldContent}>
// {countryOrigin} &nbsp;
// </p>

export default Franchise
