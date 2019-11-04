import React from 'react'

// Utils
import currencyFormatter from '../utils/currencyFormatter'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseItemPrice = ({ inversion }) => {
  return (
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
  )
}

export default FranchiseItemPrice
