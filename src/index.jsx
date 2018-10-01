import React from 'react'
import ReactDOM from 'react-dom'
import 'features/common/styles/style.less'
import App from 'App'
import { Provider } from 'react-redux'
import { store } from 'store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

