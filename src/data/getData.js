import fetchData from './fetchData'
import getCountryList from './getCountryList'
import localBackup from './localBackup'

let franchises = []

// To enable import from Google Sheets
const googleSheetsEnabler = true

const getData = () => {
  if (googleSheetsEnabler) {
    franchises = fetchData()

    // Separate categories in individual items
    franchises.forEach(franchise => {
      if (franchise.categoria.includes(';')) {
        franchise.categoria = franchise.categoria.split(';')
      }
    })

    console.log(franchises)
  } else {
    franchises = localBackup.franchises
    // console.log(localBackup.franchises)
  }

  const countryList = getCountryList(franchises)
  return { franchises, countryList }
}

export { getData as default }
