import { fetchGetWeather } from '../api'

const defaultState = {
  isFetching: false,
  payload: null,
  error: null,
}

export const archive = {
  state: defaultState,
  reducers: {
    fetchingGetWeather: state => ({
      ...state,
      isFetching: true,
    }),
    setWeather: (state, payload) => ({
      ...state,
      isFetching: false,
      payload,
      error: null,
    }),
    setErrorWeather: (state, payload) => ({
      ...state,
      isFetching: false,
      payload,
      error: null,
    }),
  },
  effects: dispatch => ({
    getWeather: async(payload) => {
      dispatch.archive.fetchingGetWeather()
      try {
        const response =
          await fetchGetWeather(payload)
        dispatch.archive.setWeather(response.data)
      }
      catch (error) {
        dispatch.archive.setErrorWeather(error)
        console.error(error)
      }
    },
  }),
}
