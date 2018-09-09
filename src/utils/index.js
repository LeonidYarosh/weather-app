export const cx = arr => arr.filter(e => e).join(' ')
export const converterFahrenheitToCelsius = fahrenheit =>
  fahrenheit ? roundingUp((fahrenheit - 32) * (5 / 9)) : ''
export const roundingUp = number =>
  number && typeof number === 'number' ? parseFloat(number.toFixed(2)) : false
