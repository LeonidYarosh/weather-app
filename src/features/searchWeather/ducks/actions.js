import { getFetchActions } from 'features/ducks/fetch'
import ActionType from './const'
import { fetchGetWeather } from '../api'

const actions = getFetchActions(ActionType.GET_WEATHER_FOR_CITY)

export const getWeather = payload => {
  return async dispatch => {
    dispatch(actions.started())
    try {
      const response = await fetchGetWeather(payload)
      dispatch(actions.success(response.data))
    } catch (error) {
      dispatch(actions.failure(error))
    }
  }
}
