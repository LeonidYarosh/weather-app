import axios from 'axios'
import {
  baseUrl,
  apiId,
} from 'features/common/const'

export const getWeather = async city => {
  try {
    const response = await axios.get(`${baseUrl}${city}&${apiId}`)
    return response.data
  }
  catch (error) {
    console.error(error)
  }
}
