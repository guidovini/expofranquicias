import React from 'react'

// Styles
import franchiseItemStyles from './franchiseItem.module.scss'

const renderCategories = categoria => {
  if (categoria.includes(';')) {
    const category = categoria.split(';')
    return category.map(subCategory => (
      <p className={franchiseItemStyles.subCategory} key={subCategory}>
        {subCategory}
      </p>
    ))
  } else {
    return (
      categoria && (
        <p className={franchiseItemStyles.subCategory}>{categoria}</p>
      )
    )
  }
}

const FranchiseItemCategories = ({ categoria }) => {
  return (
    <div className={franchiseItemStyles.category}>
      {renderCategories(categoria)}
    </div>
  )
}

export { FranchiseItemCategories as default, renderCategories }
