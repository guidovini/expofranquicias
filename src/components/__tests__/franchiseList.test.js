import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby' // mocked

import { PureFranchiseList as FranchiseList } from '../franchiseList'

// Created Using the query from FranchiseList.js
const queryData = [
  {
    id: '1e773f6c-4336-5af2-a42c-b7f51c11affb',
    nombre: 'Autoseguro',
    categoria:
      'Comercializacion de Productos;Locales Comerciales;Productos de Venta',
    concepto: 'Comercialización de Purificadores de Agua',
    aniosOperacion: 37,
    numeroLocales: null,
    tamanoLocal: '6 - 16 m2',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Estados Unidos',
    tiempoRetornoInversion: '< 6 meses',
    inversion: 27500,
  },
  {
    id: 'e7f4efb1-7ac7-5a9a-8048-03163ccb290b',
    nombre: 'Test franchise',
    categoria: 'Restaurante;Bar;Entretenimiento',
    concepto: 'Resto - Bar - Karaoke',
    aniosOperacion: 17,
    numeroLocales: 11,
    tamanoLocal: '200 - 250 m2',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Ecuador',
    tiempoRetornoInversion: '2 años',
    inversion: 900000,
  },
  {
    id: 'e7f4efb1-7ac7-5a9a-8048-03163ccb290b',
    nombre: 'No investment franchise',
    categoria: 'Restaurante;Bar;Entretenimiento',
    concepto: 'Resto - Bar - Karaoke',
    aniosOperacion: 17,
    numeroLocales: 11,
    tamanoLocal: '200 - 250 m2',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Ecuador',
    tiempoRetornoInversion: '2 años',
    inversion: undefined,
  },
]
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
  ).mockImplementationOnce(({ render }) =>
    render({
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

describe('Franchise List', () => {
  test('Should_RenderFranchiseListCorrectly', () => {
    const { container } = render(<FranchiseList queryData={queryData} />)
    expect(container).toMatchSnapshot()
  })

  test('Should_RenderFranchiseList', () => {
    const { getByTestId } = render(<FranchiseList queryData={queryData} />)
    expect(getByTestId('franchise-list')).toBeInTheDocument()
  })

  test('Should_RenderFranchiseListItem', () => {
    const { getByText } = render(<FranchiseList queryData={queryData} />)
    expect(getByText('Test franchise')).toBeInTheDocument()
  })

  test('ShouldNot_RenderFranchiseItem_When_NoFranchiseInvestment', () => {
    const { queryByText } = render(<FranchiseList queryData={queryData} />)
    expect(queryByText('No investment franchise')).not.toBeInTheDocument()
  })

  test('Should_RenderMessage_When_NoData', () => {
    const { getByTestId } = render(<FranchiseList />)
    expect(getByTestId('franchise-list-no-data')).toBeInTheDocument()
  })

  test('Should_RenderControlBarCorrectly', () => {
    const { getByTestId } = render(<FranchiseList queryData={queryData} />)
    expect(getByTestId('controlBar')).toBeInTheDocument()
  })
})
