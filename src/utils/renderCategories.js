import React from 'react'

import franchiseItemStyles from '../components/franchiseItem.module.scss'

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

export { renderCategories as default }
