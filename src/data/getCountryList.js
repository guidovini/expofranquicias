const getCountryList = franchises => {
  const list = []
  franchises.map(franchise => {
    return list.push(franchise.paisOrigen)
  })
  const countryList = list.filter((item, index) => list.indexOf(item) === index)
  // console.log('countryList', countryList)
  return countryList
}

export { getCountryList as default }
