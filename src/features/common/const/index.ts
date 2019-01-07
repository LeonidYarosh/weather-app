export const baseUrl:string = 'http://api.openweathermap.org/data/2.5/weather?q='
export const apiId:string = 'appid=f4f6f5f1f1e721ae85221846718756af&units=imperial'
export const getIconUrl = (icon:string):string =>
  `http://openweathermap.org/img/w/${icon}.png`
