import React from 'react'
import renderer from 'react-test-renderer'

import currencyFormatter from '../currencyFormatter'
import getCountry from '../getCountryList'
import removeSquaredMeters from '../removeSquaredMeters'
import renderCategories from '../renderCategories'

describe('Utils', () => {
  describe('Format Currency', () => {
    test('Should_ReturnFormattedCurrency', () => {
      const currency = 10000

      // Use ',' because it doesn't detect internationalization
      expect(currencyFormatter(currency)).toEqual('$ 10,000')
    })
  })

  describe('Get Country List', () => {
    test('Should_ReturnCountryList_SortDescendingOrder', () => {
      const data = [
        {
          nombre: 'A',
          paisOrigen: 'Ecuador',
        },
        {
          nombre: 'B',
          paisOrigen: 'Ecuador',
        },
        {
          nombre: 'C',
          paisOrigen: 'Peru',
        },
        {
          nombre: 'D',
          paisOrigen: 'Chile',
        },
      ]
      expect(getCountry(data)).toHaveLength(3)
      expect(getCountry(data)).toEqual(['Chile', 'Ecuador', 'Peru'])
    })

    test('Should_ReturnEmptyArray_When_NoCountryFound', () => {
      const data = []
      expect(getCountry(data)).toEqual([])
    })
  })

  describe('Remove Square Meters', () => {
    test('Should_RemoveSquareMeters_From_String', () => {
      const size = '20 m2'
      expect(removeSquaredMeters(size)).toBe('20 ')
      expect(removeSquaredMeters(size)).not.toBe('20 m2')
    })
  })

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
})
