import React from 'react'

import FranchiseItem from './franchiseItem'
import franchises from '../data/franchiseList'

import franchiseListStyles from './franchiseList.module.scss'

const FranchiseList = () => {
  return (
    <div className={franchiseListStyles.column}>
      {franchises.map(franchise => {
        return (
          franchise.investment && (
            <FranchiseItem
              franchise={franchise}
              key={`${franchise.name} + ${franchise.investment}`}
            />
          )
        )
      })}
    </div>
  )
}

export default FranchiseList
