import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import DevTools from './DevTools'
import 'features/common/styles/style.less'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      { process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root'),
)
