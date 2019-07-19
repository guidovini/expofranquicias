import React from 'react'

// Components
import Logo from './logo'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseItemLogo = ({ nombre }) => {
  return (
    <div className={franchiseItemStyles.imageBox} data-testid="franchise-logo">
      <Logo imgName={`${nombre}.jpg`} />
    </div>
  )
}

export { FranchiseItemLogo as default }
