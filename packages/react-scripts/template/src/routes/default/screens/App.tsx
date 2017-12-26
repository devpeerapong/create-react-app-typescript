import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../counters'

import '../styles/App.css'

const logo = require('../../../assets/logo.svg')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <br />
          <Link to={paths.counters}>Go to Counter</Link>
        </p>
      </div>
    )
  }
}

export default App
