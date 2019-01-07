import { IStore } from 'features/ducks'

export type TFetchingWeather = boolean
export type TErrorWeather = object | string | null
export type TPayloadWeather = object | string | null

export const getFetchingWeather = (state:IStore):TFetchingWeather => state.weather.isFetching
export const getErrorWeather = (state:IStore):TErrorWeather => state.weather.errorData
export const getPayloadWeather = (state:IStore):TPayloadWeather => state.weather.payload
