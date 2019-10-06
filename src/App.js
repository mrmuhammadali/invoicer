// @flow
// libs
import * as React from 'react'
import { Helmet } from 'fusion-plugin-react-helmet-async'
import { Route, Switch } from 'fusion-plugin-react-router'

// src
import { CreateInvoice } from './containers/CreateInvoice'
import { PageNotFound } from './containers/PageNotFound'
import { SnackbarProvider } from './components/Snackbar'
import { ViewInvoice } from './containers/ViewInvoice/index'

export const App = (
  <React.Fragment>
    <Helmet>
      <title>React Invoicer</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
    <SnackbarProvider>
      <Switch>
        <Route exact path="/" component={CreateInvoice} />
        <Route exact path="/:id" component={ViewInvoice} />
        <Route component={PageNotFound} />
      </Switch>
    </SnackbarProvider>
  </React.Fragment>
)
