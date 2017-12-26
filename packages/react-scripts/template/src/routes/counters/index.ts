import { RouteConfig } from 'react-router-config'

import CounterScreen from './screens/CounterScreen'

export const paths = {
  counters: '/counters'
}

export default [
  { path: paths.counters, component: CounterScreen }
] as RouteConfig[]
