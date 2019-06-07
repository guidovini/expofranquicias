import React from "react"

import FranchiseItem from "./franchiseItem"
import franchises from "../data/franchiseList"

import franchiseListStyles from "./franchiseList.module.scss"

const FranchiseList = () => {
  return (
    <div className={franchiseListStyles.column}>
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
  )
}

export default FranchiseList
