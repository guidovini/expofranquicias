import getCountryList from '../utils/getCountryList'
import localBackup from './localBackup'
import currencyFormatter from '../utils/currencyFormatter'

// To enable import from Google Sheets
const googleSheetsEnabler = true

const getData = (franchises = []) => {
  console.log('getData activated!')
  if (googleSheetsEnabler && franchises.length > 0) {
    franchises.forEach(franchise => {
      // Separate categories into individual items
      if (franchise.categoria.includes(';')) {
        franchise.categoria = franchise.categoria.split(';')
      }

      // Remove square meters and replace it with an empty space
      franchise.tamanoLocal = franchise.tamanoLocal.replace(' m2', ' ')

      // Format currency
      franchise.inversion = currencyFormatter(franchise.inversion)
    })

    console.log('googleSheetsEnabler', franchises)
  } else {
    franchises = localBackup
    console.log('localBackup', localBackup)
  }

  const countryList = getCountryList(franchises)

  return { franchises, countryList }
}

export { getData as default }
