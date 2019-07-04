// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

// Problem in Node: Node doesn't fully support Internationalization. Check this: https://stackoverflow.com/questions/55183776/different-behaviour-of-intl-numberformat-in-node-and-browser
// It still works in React

// To insert a space between the symbol and the number: https://stackoverflow.com/questions/44533919/space-after-symbol-with-js-intl

const locales = 'es-EC'
const options = {
  // style: 'currency',
  // currency: 'USD',
  // currencyDisplay: 'code', // Displays USD 1,000.00
  // useGrouping: false, // To use thousands separators. Displays 565000.13
  minimumFractionDigits: 0,
}

const currencyFormatter = number => {
  return new Intl.NumberFormat(locales, options).format(number)
  // .replace(/^(\D+)/, '$1 ')
}

export { currencyFormatter as default }
