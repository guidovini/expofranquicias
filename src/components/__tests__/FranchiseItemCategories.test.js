import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby' // mocked

import { renderCategories } from '../FranchiseItemCategories'

describe('Render Categories', () => {
  test('Should_RenderCategories_When_MultipleCategories', () => {
    const multipleCategories = 'Restaurant;Food;Coffee'
    const oneCategory = 'Bar'

    expect(renderCategories(multipleCategories)).not.toEqual(
      <p className="subCategory">Restaurant</p>
    )
    expect(renderCategories(oneCategory)).toEqual(
      <p className="subCategory">Bar</p>
    )
  })
})
