import React from "react"

import Image from "./image"

import franchiseItemStyles from "./franchiseItem.module.scss"

const Franchise = ({ name, category, description, price }) => {
  return (
    <div className={franchiseItemStyles.container}>
      <div className={franchiseItemStyles.image}>
        <Image />
      </div>

      <div className={franchiseItemStyles.data}>
        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Nombre:</h4>
          <p>{name}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Categoria:</h4>
          <p>{category}</p>
        </div>

        <div className={franchiseItemStyles.field}>
          <h4 className={franchiseItemStyles.fieldTitle}>Descripcion:</h4>
          <p>{description}</p>
        </div>

        <div
          className={franchiseItemStyles.field}
          style={{ justifyContent: "flex-end" }}
        >
          <h4 className={franchiseItemStyles.fieldTitle}>Precio:</h4>
          <p className={franchiseItemStyles.price}>
            <span>$</span>
            {price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Franchise
