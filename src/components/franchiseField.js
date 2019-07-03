import React from 'react'

import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseField = ({ field, fieldContent }) => {
  const selectFieldTitle = field => {
    switch (field) {
      case 'aniosOperacion':
        return 'Años de Operación:'
      case 'numeroLocales':
        return 'Número de Locales:'
      case 'tamanoLocal':
        return 'Tamaño del Local:'
      case 'disponibilidadTerritorial':
        return 'Disponibilidad Territorial:'
      case 'paisOrigen':
        return 'País de Origen:'
      case 'tiempoRetornoInversion':
        return 'Tiempo Retorno de Inversión:'
      default:
        return ''
    }
  }

  const selectFieldContent = (field, fieldContent) => {
    switch (field) {
      case 'tamanoLocal':
        return (
          <p className={franchiseItemStyles.fieldContent}>
            {fieldContent}
            <span>
              m<sup>2</sup>
            </span>
          </p>
        )
      case 'paisOrigen':
        return (
          <img
            className={franchiseItemStyles.flag}
            src={require(`../assets/flags/${fieldContent}.png`)}
            alt={`${fieldContent} flag`}
            title={fieldContent}
          />
        )
      default:
        return (
          <p className={franchiseItemStyles.fieldContent}>{fieldContent}</p>
        )
    }
  }

  return (
    <div className={franchiseItemStyles.field}>
      <h4 className={franchiseItemStyles.fieldTitle}>
        {selectFieldTitle(field)}
      </h4>
      {selectFieldContent(field, fieldContent)}
    </div>
  )
}

export { FranchiseField as default }
