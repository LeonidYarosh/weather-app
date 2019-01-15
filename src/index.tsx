import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as WebFontLoader from 'webfontloader'

import App from './App'
import { store } from './store'
import DevTools from './DevTools'

import 'features/common/styles/style.less'
import 'react-md/src/scss/_react-md.scss'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
})

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      { process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root'),
)
