import axios from 'axios'
import {
  baseUrl,
  apiId,
} from 'features/common/const'

export const fetchGetWeather = city => axios.get(`${baseUrl}${city}&${apiId}`)
