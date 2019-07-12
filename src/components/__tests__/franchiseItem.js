import React from 'react'
import { render } from '@testing-library/react'

import FranchiseItem from '../franchiseItem'

const franchise = {
  nombre: 'Autoseguro',
  concepto: 'Blindaje Automotores Anti Asalto y Anti Bandálico',
  tamanoLocal: '600 m2',
  aniosOperacion: '',
  numeroLocales: '5',
  inversion: 260000,
  tiempoRetornoInversion: '18 meses',
  disponibilidadTerritorial: 'Todo el Ecuador',
  paisOrigen: 'Argentina',
}

describe('Franchise Item', () => {
  test('Should_RenderFranchiseItemCorrectly', () => {
    const { container } = render(<FranchiseItem franchise={franchise} />)
    expect(container).toMatchSnapshot()
  })

  test('Should_RenderFranchiseItemElements', () => {
    const { getByText } = render(<FranchiseItem franchise={franchise} />)
    expect(getByText('Disponibilidad:')).toBeInTheDocument()
    expect(getByText('País de Origen:')).toBeInTheDocument()
    expect(getByText('Tiempo ROI:')).toBeInTheDocument()
  })
})
