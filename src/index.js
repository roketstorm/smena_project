import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
// import registerServiceWorker from './registerServiceWorker'
import getStore from './store'

const store = getStore({})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
