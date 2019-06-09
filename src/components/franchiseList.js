import React from 'react'

import FranchiseItem from './franchiseItem'
import franchises from '../data/franchiseList'

const FranchiseList = () => {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1">
        {franchises.map(franchise => {
          const { name, category, description, price } = franchise
          return (
            <FranchiseItem
              name={name}
              category={category}
              description={description}
              price={price}
              key={name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FranchiseList
