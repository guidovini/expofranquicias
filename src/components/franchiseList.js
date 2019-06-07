import React from "react"
import Franchise from "./franchise"

import franchiseListStyles from "./franchiseList.module.css"

const franchises = [
  {
    name: "Ecuafranquicias",
    category: "Consultoria",
    description: "Esta es la descripcion de Ecuafranquicias",
    price: 12000,
  },
  {
    name: "AEFRAN",
    category: "Organizacion",
    description: "Esta es la descripcion de AEFRAN",
    price: 15000,
  },
  {
    name: "Villagran Lara",
    category: "Consultoria",
    description: "Esta es la descripcion de Villagran Lara",
    price: 20000,
  },
  {
    name: "Mongos",
    category: "Restaurant",
    description: "Esta es la descripcion de Mongos",
    price: 45000,
  },
]

const FranchiseList = () => {
  return (
    <div className={franchiseListStyles.column}>
      {franchises.map(franchise => {
        const { name, category, description, price } = franchise
        return (
          <Franchise
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
