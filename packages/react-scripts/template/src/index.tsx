import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import routes from './routes'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App routes={routes} />, document.getElementById(
  'root'
) as HTMLElement)
registerServiceWorker()
