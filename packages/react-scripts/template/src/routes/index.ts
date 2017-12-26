import { RouteConfig } from 'react-router-config'

import CounterRoutes from './counters'

import App from './default/screens/App'

export default [
  { path: '/', component: App, exact: true },
  ...CounterRoutes
] as RouteConfig[]
