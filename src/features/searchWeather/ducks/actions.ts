import { Dispatch } from 'redux'

import { getFetchActions, IGetFetchActions } from 'features/ducks/fetch'
import { ActionType } from './const'
import { fetchGetWeather } from '../api'
import { IErrorRequest } from 'features/common/types'

const actions = getFetchActions(ActionType.GET_WEATHER_FOR_CITY)

export type TGetWeather = Promise<void>

export const getWeather = (city: string) => async (dispatch:Dispatch):TGetWeather => {
    dispatch(actions.started())
    try {
      const response = await fetchGetWeather(city)
      dispatch(actions.success(response.data))
    } catch (error) {
      const errorMessage = error.message
      dispatch(actions.failure(errorMessage))
    }
  }
