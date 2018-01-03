import { RouteConfig } from 'react-router-config'

import CounterRoutes from './counters'

import Main from './default/screens/Main'
import AppLayout from '../layouts/AppLayout'

export default [
  {
    component: AppLayout,
    routes: [{ path: '/', component: Main, exact: true }, ...CounterRoutes]
  }
] as RouteConfig[]
