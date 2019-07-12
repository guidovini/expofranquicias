import React from 'react'
import renderer from 'react-test-renderer'

import currencyFormatter from '../currencyFormatter'
import getCountry from '../getCountryList'
import removeSquaredMeters from '../removeSquaredMeters'
import renderCategories from '../renderCategories'

describe('Utils', () => {
  test('Should_ReturnFormattedCurrency', () => {
    const currency = 10000

    // Use ',' because it doesn't detect internationalization
    expect(currencyFormatter(currency)).toEqual('$ 10,000')
  })

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

  test('Should_RemoveSquareMeters_From_String', () => {
    const size = '20 m2'
    expect(removeSquaredMeters(size)).toBe('20 ')
    expect(removeSquaredMeters(size)).not.toBe('20 m2')
  })

  test('Should_RenderCategories_When_MultipleCategories', () => {
    const multipleCategories = 'Restaurant;Food;Coffee'
    const oneCategory = 'Bar'

    // expect(renderCategories(multipleCategories)).toBe([
    // <p className="subCategory">Restaurant</p>,
    // <p className="subCategory">Food</p>,
    // <p className="subCategory">Coffee</p>,
    // ])
    expect(renderCategories(multipleCategories)).not.toEqual(
      <p className="subCategory">Restaurant</p>
    )
    expect(renderCategories(oneCategory)).toEqual(
      <p className="subCategory">Bar</p>
    )
  })
})
