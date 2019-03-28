
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'remote-redux-devtools';

import { Router } from 'react-router-dom'
import AppRoutes from './routes'
import { syncHistoryWithStore, routerReducer as routing  } from 'react-router-redux'

import { createBrowserHistory } from 'history'
// translations (each component need to import i18next)
import i18next from 'i18next'
import XHR from 'i18next-xhr-backend'

import * as reducers from './reducers'
import './styles/style.less'

// const localIpUrl = require('local-ip-url');
// if(process.env.NODE_ENV==="production"){
//   console.log("I am running in production mode")
// } else {
//   console.log("I am running in dev mode at http://"+localIpUrl('public', 'ipv4'))
// }



const reducer = combineReducers({
  ...reducers,
  routing,
})

const initialState = {}
const composeEnhancers = composeWithDevTools({ realtime: true, name: "react-redux-router-skeleton", });
const store = createStore(reducer, initialState, composeEnhancers(
  applyMiddleware(thunk),
))
// connect router to store for history
const history = syncHistoryWithStore(createBrowserHistory(), store)

// get translations and render
i18next.use(XHR).init({
  lng: 'sv',
  debug: process.env.NODE_ENV === 'development',
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: false,
  backend: {
    loadPath: `/locales/{{lng}}.json`,
  },
}, () => {
ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <AppRoutes />
      </Router>
  </Provider>,
  document.getElementById('app')
)
})
