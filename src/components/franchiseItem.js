import React from 'react'

// Components
import FranchiseItemLogo from './FranchiseItemLogo'
import FranchiseItemTitle from './FranchiseItemTitle'
import FranchiseItemIconData from './FranchiseItemIconData'
import FranchiseItemLabelData from './FranchiseItemLabelData'
import FranchiseItemPrice from './FranchiseItemPrice'
import FranchiseItemCategories from './FranchiseItemCategories'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseItem = ({ franchise }) => {
  return (
    <div className={franchiseItemStyles.container}>
      <FranchiseItemLogo nombre={franchise.nombre} />
      {
        // <FranchiseItemCategories categoria={franchise.categoria} />
      }
      <div className={franchiseItemStyles.data}>
        <FranchiseItemTitle
          nombre={franchise.nombre}
          concepto={franchise.concepto}
        />
        <FranchiseItemIconData franchise={franchise} />
        <FranchiseItemLabelData franchise={franchise} />
        <FranchiseItemPrice inversion={franchise.inversion} />
      </div>
    </div>
  )
}

export default FranchiseItem
