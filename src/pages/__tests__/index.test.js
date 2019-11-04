import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { StaticQuery, useStaticQuery } from 'gatsby' // mocked

import IndexPage from '../index'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: `Default Starter`,
        description: `Test description`,
        author: `Test author`,
      },
    },
  })
})

describe('Index Page', () => {
  test('Should_RenderIndexPageCorrectly', () => {
    const { context } = render(<IndexPage />)
    expect(context).toMatchSnapshot()
  })

  test('Should_HaveSearchFranchisesButton', () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText('Buscar Franquicias')).toBeInTheDocument()
  })

  test('Should_HaveMoreInfoButton', () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText('Más Información')).toBeInTheDocument()
  })

  // test('Should_RedirectPage_When_BuscarFranquiciasButtonCicked', async () => {
  //   const { getByText, unmount } = render(<IndexPage />)
  //   const searchFranchisesButton = getByText('Buscar Franquicias')
  //   fireEvent.click(searchFranchisesButton)
  //   expect(history.location.pathname).toBe('/franquicias-disponibles')
  // })

  // test('Should_RedirectPage_When_BuscarFranquiciasButtonCicked', () => {
  //   const { getByText } = render(<IndexPage />)
  //   const moreInfoButton = getByText('Más Información')
  //   fireEvent.click(moreInfoButton)
  //   expect(history.location.pathname).toBe('/contacto')
  // })
})
