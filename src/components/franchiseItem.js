import React from 'react'

import Image from './image'

const FranchiseItem = ({ name, category, description, price }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image is-4by3">
          <Image />
        </div>

        <div className="card-content">
          <div className="content level">
            <h4 className="level-item">Nombre:</h4>
            <p className="level-item">{name}</p>
          </div>

          <div className="content level">
            <h4 className="level-item">Categoria:</h4>
            <p className="level-item">{category}</p>
          </div>

          <div className="content level">
            <h4 className="level-item">Descripcion:</h4>
            <p className="level-item">{description}</p>
          </div>

          <div className="content level">
            <h4 className="level-item">Precio:</h4>
            <p className="level-item">
              <span>$</span>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FranchiseItem
