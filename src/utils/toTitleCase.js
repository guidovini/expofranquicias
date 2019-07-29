function toTitleCase(str) {
  if (typeof str === 'object') {
    return
  }
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export { toTitleCase as default }
