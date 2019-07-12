import React from 'react'
import { render } from '@testing-library/react'

import Header from '../header'

describe('Header', () => {
  test('Should_RenderHeaderCorrectly', () => {
    const { container } = render(<Header siteTitle="Default Starter" />)
    expect(container).toMatchSnapshot()
  })

  test('Should_RenderHeaderElements', () => {
    const { getByText, queryByText } = render(
      <Header siteTitle="Default Starter" />
    )
    expect(getByText('Expofranquicias Ecuador')).toBeInTheDocument()
    expect(getByText('Franquicias Disponibles')).toBeInTheDocument()
    expect(queryByText('Buscar Franquicias')).not.toBeInTheDocument()
    expect(queryByText('Dirección')).not.toBeInTheDocument()
  })
})
