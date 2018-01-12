import * as React from 'react'
import { NavLink } from 'react-router-dom'
import {
  RouteConfig,
  renderRoutes,
  RouteConfigComponentProps
} from 'react-router-config'

import './AppLayout.css'

export interface AppLayoutProps
  extends RouteConfigComponentProps<typeof AppLayout> {
  routes: RouteConfig[]
}

function AppLayout(props: AppLayoutProps) {
  return (
    <section className="app-layout">
      <main className="main">{renderRoutes(props.route!.routes)}</main>
      <nav className="navigation">
        <NavLink className="link" to="/" exact={true}>
          <i className="ion-ios-home" /> Home
        </NavLink>
        <NavLink className="link" to="/counters">
          <i className="ion-ios-speedometer" />
          Counters
        </NavLink>
      </nav>
    </section>
  )
}

export default AppLayout
