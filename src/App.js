// @flow
// libs
import * as React from 'react'
import { Route, Switch } from 'fusion-plugin-react-router'

// src
import { CreateInvoice } from './containers/CreateInvoice'
import { PageNotFound } from './containers/PageNotFound'
import { ViewInvoice } from './containers/ViewInvoice/index'
import { Helmet } from 'fusion-plugin-react-helmet-async'

export const App = (
  <React.Fragment>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={CreateInvoice} />
      <Route exact path="/:id" component={ViewInvoice} />
      <Route component={PageNotFound} />
    </Switch>
  </React.Fragment>
)
