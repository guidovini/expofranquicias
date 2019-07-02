import fetchData from './fetchData'
import getCountryList from './getCountryList'
import localBackup from './localBackup'

let franquicias = []

// To enable import from Google Sheets
const googleSheetsEnabler = false

const getData = () => {
  if (googleSheetsEnabler) {
    franquicias = fetchData()
    console.log(franquicias)
  } else {
    franquicias = localBackup.franquicias
    console.log(localBackup.franquicias)
  }

  const listaPaises = getCountryList(franquicias)
  return { franquicias, listaPaises }
}

export { getData as default }
