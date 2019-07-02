const franchiseSelector = (franchises, orderBy, filterBy, searchBy) => {
  return franchises
    .filter(franchise => {
      const searchText = searchBy.toLowerCase().trim()
      return (
        franchise.name.toLowerCase().includes(searchText) ||
        franchise.concept.toLowerCase().includes(searchText)
      )
    })
    .filter(franchise => {
      if (filterBy === 'all') {
        return franchise
      }
      if (franchise.countryOrigin === filterBy) {
        return franchise.countryOrigin === filterBy
      }
    })
    .sort((a, b) => {
      const x = a.name.toLowerCase()
      const y = b.name.toLowerCase()
      if (orderBy === 'alpha') {
        if (x < y) {
          return -1
        }
        if (x > y) {
          return 1
        }
        return 0
      }

      if (orderBy === 'lower-price') return a.investment - b.investment
      if (orderBy === 'higher-price') return b.investment - a.investment
    })
}

export { franchiseSelector as default }
