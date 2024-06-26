import currencyFormatter from '../currencyFormatter'
import getCountry from '../getCountryList'
import removeSquaredMeters from '../removeSquaredMeters'
import toTitleCase from '../toTitleCase'

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

  describe('To Title Case', () => {
    test('Should_TransformTextToTitleCase', () => {
      const text = 'test text'
      expect(toTitleCase(text)).toBe('Test Text')
      expect(toTitleCase(text)).not.toBe('test Text')
      expect(toTitleCase(text)).not.toBe('Test text')
      expect(toTitleCase(text)).not.toBe('testText')
    })
  })
})
