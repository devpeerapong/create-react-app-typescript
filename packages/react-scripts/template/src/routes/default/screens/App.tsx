import * as React from 'react'

import '../styles/App.css'

const logo = require('../../../assets/logo.svg')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="section">
          <p className="intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </div>
    )
  }
}

export default App
