import React from 'react'

// Components
import FranchiseField from './FranchiseField'

// Utils
import toTitleCase from '../utils/toTitleCase'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseItemLabelData = ({ franchise }) => {
  const {
    disponibilidadTerritorial,
    paisOrigen,
    tiempoRetornoInversion,
  } = franchise

  return (
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
          <FranchiseField
            field={'paisOrigen'}
            fieldContent={toTitleCase(paisOrigen)}
          />
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
  )
}

export default FranchiseItemLabelData
