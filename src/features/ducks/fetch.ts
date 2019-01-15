import { handleActions, createAction } from 'redux-actions'
import get from 'lodash/get'

const prefix:string = 'fetch'

export interface ITypes {
  STARTED: string,
  SUCCESS: string,
  FAILURE: string,
}

export const types = {
  STARTED: `${prefix}/STARTED`,
  SUCCESS: `${prefix}/SUCCESS`,
  FAILURE: `${prefix}/FAILURE`,
}
export interface IAction {
  type: string,
  payload: object | null,
  meta: string | object | null,
}

export interface IStandardState {
  isFetching: boolean,
  errorData: any,
  payload: any,
}

export interface IStandardReducer {
  'fetch/STARTED': IStandardState,
  'fetch/SUCCESS': IStandardState,
  'fetch/FAILURE': IStandardState,
}

export type TReducerFunc = (state: object, action: IAction) => object

const fetchReducer = handleActions({
    [types.STARTED]: (state: IStandardState):IStandardState => ({
      ...state,
      isFetching: true,
      errorData: null,
    }),
    [types.SUCCESS]: (state: IStandardState, { payload }: IAction):IStandardState => ({
      ...state,
      payload,
      isFetching: false,
      errorData: null,
    }),
    [types.FAILURE]: (state: IStandardState, { payload }: IAction):IStandardState => ({
      ...state,
      isFetching: false,
      errorData: payload,
    }),
  },
  {
    isFetching: false,
    errorData: null,
    payload: null,
  },
)
/**
 * Определение нужного экшена и передача редьюсеру
 * @param reducerFunc
 * @param reducerName
 * @returns {Function}
 */
export const createNamedWrapperReducer = (reducerFunc: TReducerFunc, reducerName: string): object => (
  state: IStandardState,
  action: IAction,
) => {
  const isInitializtionCall = state === undefined
  const name = get(action, 'meta.name')

  if (name !== reducerName && !isInitializtionCall) return state

  return reducerFunc(state, action)
}

export const getFetchReducer = (name:string) => createNamedWrapperReducer(fetchReducer, name)

export interface IGetFetchActions {
  started: IAction,
  success: IAction,
  failure: IAction
}
/**
 * Создание шаблонных экшенов
 * @param name
 * @returns {{started: *, success: *, failure: *}}
 */
export const getFetchActions = (name:string) => ({
  started: createAction(types.STARTED, undefined, () => ({ name })),
  success: createAction(types.SUCCESS, undefined, () => ({ name })),
  failure: createAction(types.FAILURE, undefined, () => ({ name })),
})
