import { handleActions, createAction } from 'redux-actions'
import get from 'lodash/get'

const prefix = 'fetch'

export const types = {
  STARTED: `${prefix}/STARTED`,
  SUCCESS: `${prefix}/SUCCESS`,
  FAILURE: `${prefix}/FAILURE`,
}

const fetchReducer = handleActions(
  {
    [types.STARTED]: state => ({
      ...state,
      isFetching: true,
      errorData: null,
    }),
    [types.SUCCESS]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      errorData: null,
      payload,
    }),
    [types.FAILURE]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      errorData: payload,
    }),
  },
  {
    isFetching: false,
    errorData: null,
    payload: null,
  }
)
/**
 * Определение нужного экшена и передача редьюсеру
 * @param reducerFunc
 * @param reducerName
 * @returns {Function}
 */
export const createNamedWrapperReducer = (reducerFunc, reducerName) => (
  state,
  action
) => {
  const isInitializtionCall = state === undefined
  const name = get(action, 'meta.name')

  if (name !== reducerName && !isInitializtionCall) return state

  return reducerFunc(state, action)
}

const getFetchReducer = name => createNamedWrapperReducer(fetchReducer, name)
export default getFetchReducer
/**
 * Создание шаблонных экшенов
 * @param name
 * @returns {{started: *, success: *, failure: *}}
 */
export const getFetchActions = name => ({
  started: createAction(types.STARTED, undefined, () => ({ name })),
  success: createAction(types.SUCCESS, undefined, () => ({ name })),
  failure: createAction(types.FAILURE, undefined, () => ({ name })),
})
