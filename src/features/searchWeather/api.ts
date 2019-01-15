import axios from 'axios'
import {
  baseUrl,
  apiId,
} from 'features/common/const'

export interface IWeather {
  main: {
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  weather: [{
    id: number,
    main: string,
    icon: string,
    description: string,
  }],
  description: string,
  name: string,
  wind: {
    speed: number,
  },
}

export interface IWeatherData  {
  data: IWeather
}

export const fetchGetWeather = (city: string): Promise<IWeatherData> =>
    axios.get(`${baseUrl}${city}&${apiId}`)
