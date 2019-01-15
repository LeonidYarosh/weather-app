import { Dispatch } from 'redux'

import { getFetchActions, IGetFetchActions } from 'features/ducks/fetch'
import { ActionType } from './const'
import { fetchGetWeather } from '../api'

const actions = getFetchActions(ActionType.GET_WEATHER_FOR_CITY)

export type TGetWeather = Promise<void>

export const getWeather = (city: string) => async (dispatch:Dispatch):TGetWeather => {
    dispatch(actions.started())
    try {
      const response = await fetchGetWeather(city)
      dispatch(actions.success(response.data))
    } catch (error) {
      dispatch(actions.failure(error))
    }
  }
