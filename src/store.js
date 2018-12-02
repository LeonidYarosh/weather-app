import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'features/ducks'
// import createHistory from 'history/createBrowserHistory'
// import { routerReducer, routerMiddleware } from 'react-router-redux'

// export const history = createHistory()

const rootReducer = combineReducers({
  // routing: routerReducer,
  ...reducers,
})

// const middleware = [ thunk, routerMiddleware(history) ]
const middleware = [thunk]

const initialState = {}
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
export const store = createStore(rootReducer, initialState, composedEnhancers)
