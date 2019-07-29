import React from 'react'

// Components
import Logo from './logo'
import Image from './image'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const FranchiseItemLogo = ({ nombre }) => {
  return (
    <div className={franchiseItemStyles.imageBox} data-testid="franchise-logo">
      {nombre ? (
        <Logo imgName={`${nombre}.jpg`} />
      ) : (
        <Logo imgName={`franchise.png`} />
      )}
    </div>
  )
}

export { FranchiseItemLogo as default }
