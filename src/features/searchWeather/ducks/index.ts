import ActionType from './const'
import fetchReducer from 'features/ducks/fetch'

export default fetchReducer(ActionType.GET_WEATHER_FOR_CITY)
