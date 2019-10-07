// @flow
// libs
import App from 'fusion-react'
import HelmetPlugin from 'fusion-plugin-react-helmet-async'
import HttpRouter, {
  HttpHandlersToken,
  HttpRouterToken,
} from 'fusion-plugin-http-router'
import mongoose from 'mongoose'
import Router from 'fusion-plugin-react-router'

// src
import { App as ClientApp } from './App'
import { handlers } from './handlers'
import { MONGODB_URI } from './constants'

export default function() {
  const app = new App(ClientApp)
  app.register(Router)
  app.register(HelmetPlugin)

  if (__NODE__) {
    mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(res => {
        console.log('Connected!!!')
      })

    app.register(HttpRouterToken, HttpRouter)
    app.register(HttpHandlersToken, handlers)
  }

  return app
}
