import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Resume } from './Resume'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Resume language="en" />} exact />
      <Route path="/:lang" render={(props) => <Resume language={props.match.params.lang} />} exact />
    </Switch>
  </BrowserRouter>
)
export * from './Resume'
