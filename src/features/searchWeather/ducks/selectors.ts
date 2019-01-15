import { IStore } from 'features/ducks'
import { IWeather } from '../api'

export type TFetchingWeather = boolean
export type TErrorWeather = object | null

export const getFetchingWeather = (state:IStore):TFetchingWeather => state.weather.isFetching
export const getErrorWeather = (state:IStore):TErrorWeather => state.weather.errorData
export const getPayloadWeather = (state:IStore): IWeather => state.weather.payload
