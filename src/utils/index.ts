
export const cx = (arr:[string]):string =>
  arr.filter(e => e).join(' ')

export const converterFahrenheitToCelsius = (fahrenheit:number):string =>
  fahrenheit ? roundingUp((fahrenheit - 32) * (5 / 9)) : ''

export const roundingUp = (number:number):string =>
  number && typeof number === 'number' ? number.toFixed(2) : ''
