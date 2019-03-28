import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import requireAuthentication from './containers/login/requireAuth'

import {
  App,
} from './components'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={requireAuthentication(App)}/> */}
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}
