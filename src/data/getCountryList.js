const getCountryList = franchises => {
  const list = []
  franchises.map(franchise => {
    return list.push(franchise.paisOrigen)
  })
  const countryList = list
    .filter((item, index) => list.indexOf(item) === index)
    .sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
    })
  // console.log('countryList', countryList)
  return countryList
}

export { getCountryList as default }
