// @flow
// libs
import App from 'fusion-react'
import { FetchToken } from 'fusion-tokens'
import HTTPRouter, { HTTPHandlersToken } from 'fusion-plugin-http-router'
import Router from 'fusion-plugin-react-router'

// src
import { App as ClientApp } from './App'
import { handlers } from './handlers'

export default function() {
  const app = new App(ClientApp)
  app.register(Router)

  if (__NODE__) {
    app.register(HTTPRouter)
    app.register(HTTPHandlersToken, handlers)
  }

  return app
}
