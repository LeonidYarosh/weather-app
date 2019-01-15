import { ActionType } from './const'
import { getFetchReducer } from 'features/ducks/fetch'

export const reducers = getFetchReducer(ActionType.GET_WEATHER_FOR_CITY)
