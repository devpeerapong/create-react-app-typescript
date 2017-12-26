import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import routes from './routes'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App routes={routes} />, div)
})
