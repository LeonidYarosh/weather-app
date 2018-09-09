import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { reducer as formReducer } from 'redux-form'

// import reducers from 'features/ducks'

export const history = createHistory()

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  // ...reducers,
})

const middleware = [thunk, routerMiddleware(history)]

const initialState = {}
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
export const store = createStore(rootReducer, initialState, composedEnhancers)
