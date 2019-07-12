import React from 'react'
import { render } from '@testing-library/react'

import FranchiseList from '../franchiseList'

describe('Franchise List', () => {
  test('Should_RenderFranchiseListCorrectly', () => {
    const { container } = render(<FranchiseList />)
    expect(container).toMatchSnapshot()
  })

  test('Should_FetchDataFromGraphQL', () => {})
})
