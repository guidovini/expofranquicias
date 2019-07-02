import fetchData from './fetchData'
import getCountryList from './getCountryList'
import localBackup from './localBackup'

let franchises = []

// To enable import from Google Sheets
const googleSheetsEnabler = false

const getData = () => {
  if (googleSheetsEnabler) {
    franchises = fetchData()
    // console.log(franchises)
  } else {
    franchises = localBackup.franchises
    // console.log(localBackup.franchises)
  }

  const countryList = getCountryList(franchises)
  return { franchises, countryList }
}

export { getData as default }
