require('module-alias/register')

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import DevTools from './DevTools'
import 'features/common/styles/style.less'

ReactDOM.render(
  <Provider store={store}>
    <App />
    { process.env.NODE_ENV === 'production' && <DevTools />}
  </Provider>,
  document.getElementById('root')
)

