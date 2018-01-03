import { RouteConfig } from 'react-router-config'

import CounterRoutes from './counters'

import App from './default/screens/App'
import AppLayout from '../layouts/AppLayout'

export default [
  {
    component: AppLayout,
    routes: [{ path: '/', component: App, exact: true }, ...CounterRoutes]
  }
] as RouteConfig[]
