import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery, useStaticQuery } from 'gatsby' // mocked

import FranquiciasDisponibles from '../franquicias-disponibles'

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
              },
            },
          },
        ],
      },
      allGoogleSheetListadoFranquiciasRow: {
        nodes: [
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
        ],
      },
    })
  )
    .mockImplementationOnce(({ render }) =>
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
                },
              },
            },
          ],
        },
        allGoogleSheetListadoFranquiciasRow: {
          nodes: [
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
          ],
        },
      })
    )
    .mockImplementationOnce(({ render }) =>
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
                },
              },
            },
          ],
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

describe('Franquicias Disponibles Page', () => {
  test('Should_RenderFranquiciasDisponiblesPageCorrectly', () => {
    const { context } = render(<FranquiciasDisponibles />)
    expect(context).toMatchSnapshot()
  })

  test('Should_RenderFranquiciasDisponiblesList', () => {
    const { getByTestId } = render(<FranquiciasDisponibles />)
    expect(getByTestId('franchise-list')).toBeInTheDocument()
  })
})
