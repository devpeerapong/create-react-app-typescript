import * as React from 'react'
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouteConfig, renderRoutes } from 'react-router-config'

export interface AppProps {
  routes: RouteConfig[]
}

class App extends Component<AppProps> {
  render() {
    const { routes } = this.props

    return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  }
}

export default App
