// @flow
// libs
import * as React from 'react'
import { Route, Switch } from 'fusion-plugin-react-router'

// src
import { CreateInvoice } from './containers/CreateInvoice'
import { PageNotFound } from './containers/PageNotFound'
import { Toolbar } from './components/Toolbar'
import { ViewInvoice } from './containers/ViewInvoice/index'

export const App = (
  <React.Fragment>
    <Toolbar />
    <Switch>
      <Route exact path="/" component={CreateInvoice} />
      <Route exact path="/:id" component={ViewInvoice} />
      <Route component={PageNotFound} />
    </Switch>
  </React.Fragment>
)
