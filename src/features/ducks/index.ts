import { reducers as weather } from 'features/searchWeather/ducks'
import { IStandardState } from './fetch'

export interface IStore {
  weather: IStandardState,
}

export interface IStoreReducers {
  weather: object,
}

export const reducers: object = {
  weather,
}
