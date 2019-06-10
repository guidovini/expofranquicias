import React from 'react'

import FranchiseItem from './franchiseItem'
import franchises from '../data/franchiseList'

import franchiseListStyles from './franchiseList.module.scss'

const FranchiseList = () => {
  return (
    <div className={franchiseListStyles.column}>
      {franchises.map(franchise => {
        const {
          name,
          concept,
          category,
          size,
          sizeUnits,
          investment,
          countryAvailability,
          countryOrigin,
        } = franchise
        return (
          <FranchiseItem
            name={name}
            concept={concept}
            category={category}
            size={size}
            sizeUnits={sizeUnits}
            investment={investment}
            countryAvailability={countryAvailability}
            countryOrigin={countryOrigin}
            key={name}
          />
        )
      })}
    </div>
  )
}

export default FranchiseList
