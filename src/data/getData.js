import fetchData from './fetchData'
import getCountryList from './getCountryList'
import localBackup from './localBackup'

let franchises = []

// To enable import from Google Sheets
const googleSheetsEnabler = false

const getData = () => {
  console.log('getData activated!')
  if (googleSheetsEnabler) {
    franchises = fetchData()

    // Separate categories in individual items
    franchises.forEach(franchise => {
      if (franchise.categoria.includes(';')) {
        franchise.categoria = franchise.categoria.split(';')
      }
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
