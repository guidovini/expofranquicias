const franchisesSelector = (franchises, orderBy, filterBy, searchBy) => {
  if (typeof franchises !== 'object') {
    return []
  }
  return franchises
    .filter(franchise => {
      const searchText = searchBy.toLowerCase().trim()
      return (
        franchise.nombre.toLowerCase().includes(searchText) ||
        franchise.concepto.toLowerCase().includes(searchText)
      )
    })
    .filter(franchise => {
      if (filterBy === 'all') {
        return franchise
      }
      if (franchise.paisOrigen === filterBy) {
        return franchise.paisOrigen === filterBy
      }
    })
    .sort((a, b) => {
      const x = a.nombre.toLowerCase()
      const y = b.nombre.toLowerCase()
      if (orderBy === 'alpha') {
        if (x < y) {
          return -1
        }
        if (x > y) {
          return 1
        }
        return 0
      }

      if (orderBy === 'lower-price') return a.inversion - b.inversion
      if (orderBy === 'higher-price') return b.inversion - a.inversion
    })
}

export { franchisesSelector as default }
