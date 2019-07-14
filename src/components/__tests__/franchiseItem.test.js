import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby' // mocked

import FranchiseItem from '../franchiseItem'

const franchise = {
  nombre: 'Franquicia Nombre 1',
  concepto: 'Franquicia Concepto 1',
  tamanoLocal: '69 m2',
  aniosOperacion: 23,
  numeroLocales: 7,
  inversion: 100000,
  tiempoRetornoInversion: '12 meses',
  disponibilidadTerritorial: 'Todo el Ecuador',
  paisOrigen: 'Ecuador',
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
      allImageSharp: {
        edges: [
          {
            node: {
              fluid: {
                base64: `pretend-i-am-a-base64-encoded-image`,
                aspectRatio: 1,
                src: 'this is the src',
                srcSet: `asdfasdf`,
                sizes: `100 200 300`,
                originalName: 'Autoseguro.jpg',
              },
            },
          },
        ],
      },
    })
  )
})

describe('Franchise Item', () => {
  test('Should_RenderFranchiseItemCorrectly', () => {
    const { container } = render(<FranchiseItem franchise={franchise} />)
    expect(container).toMatchSnapshot()
  })

  test('Should_ContainAGatsbyImage', () => {
    const { getByTestId } = render(<FranchiseItem franchise={franchise} />)
    expect(getByTestId('franchise-logo')).toBeInTheDocument()
  })

  test('Should_RenderFranchiseItemElements', () => {
    const { getByTestId } = render(<FranchiseItem franchise={franchise} />)
    expect(getByTestId('franchise-name')).toBeInTheDocument()
    expect(getByTestId('franchise-concept')).toBeInTheDocument()
    expect(getByTestId('franchise-years')).toBeInTheDocument()
    expect(getByTestId('franchise-locations')).toBeInTheDocument()
    expect(getByTestId('franchise-size')).toBeInTheDocument()
    expect(getByTestId('franchise-territory')).toBeInTheDocument()
    expect(getByTestId('franchise-countryOrigin')).toBeInTheDocument()
    expect(getByTestId('franchise-roi')).toBeInTheDocument()
    expect(getByTestId('franchise-investment')).toBeInTheDocument()
  })

  test('Should_RenderCorrectFlag', () => {
    const { getByTitle } = render(<FranchiseItem franchise={franchise} />)
    expect(getByTitle('Ecuador')).toBeInTheDocument()
  })

  // Wront Internationalization
  test('Should_RenderCorrectInvestmentFormat', () => {
    const { getByText } = render(<FranchiseItem franchise={franchise} />)
    expect(getByText('$ 100,000')).toBeInTheDocument()
  })
})
