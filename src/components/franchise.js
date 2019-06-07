import React from "react"

import Image from "../components/image"

import franchiseStyles from "./franchise.module.css"

const Franchise = ({ name, category, description, price }) => {
  return (
    <div className={franchiseStyles.container}>
      <div className={franchiseStyles.image}>
        <Image />
      </div>

      <div className={franchiseStyles.data}>
        <div className={franchiseStyles.field}>
          <p className={franchiseStyles.fieldTitle}>Nombre:</p>
          <p>{name}</p>
        </div>

        <div className={franchiseStyles.field}>
          <p className={franchiseStyles.fieldTitle}>Categoria:</p>
          <p>{category}</p>
        </div>

        <div className={franchiseStyles.field}>
          <p className={franchiseStyles.fieldTitle}>Descripcion:</p>
          <p>{description}</p>
        </div>

        <div className={franchiseStyles.field}>
          <p className={franchiseStyles.fieldTitle}>Precio:</p>
          <p>
            <span>$</span>
            {price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Franchise
