import React from 'react'

import Logo from './logo'

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

      <div className={franchiseItemStyles.data}>
        <h3 className="title is-4 has-text-grey-dark">{nombre}</h3>
        <p className="subtitle is-6 has-text-grey-dark">{concepto}</p>

        {
          //   categoria && (
          //   <div className={franchiseItemStyles.field}>
          //     <h4 className={franchiseItemStyles.fieldTitle}>Categoría:</h4>
          //     <p className={franchiseItemStyles.fieldContent}>{categoria}</p>
          //   </div>
          // )
        }

        {aniosOperacion && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Años de Operación:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>{aniosOperacion}</p>
          </div>
        )}

        {numeroLocales && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Número de Locales:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>{numeroLocales}</p>
          </div>
        )}

        {tamanoLocal && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Tamaño del Local:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>{tamanoLocal}</p>
          </div>
        )}

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>
            Disponibilidad Territorial:
          </h4>
          <p className={franchiseItemStyles.fieldContent}>
            {disponibilidadTerritorial}
          </p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>País de Origen:</h4>
          <img
            className={franchiseItemStyles.flag}
            src={require(`../assets/flags/${paisOrigen}.png`)}
            alt={`${paisOrigen} flag`}
            title={paisOrigen}
          />
        </div>

        {tiempoRetornoInversion && (
          <div className={franchiseItemStyles.field}>
            <h4 className={franchiseItemStyles.fieldTitle}>
              Tiempo Retorno de Inversión:
            </h4>
            <p className={franchiseItemStyles.fieldContent}>
              {tiempoRetornoInversion}
            </p>
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
