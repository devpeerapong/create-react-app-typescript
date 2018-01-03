import * as React from 'react'

import PageLayout from '../../../layouts/PageLayout'

export interface CounterScreenState {
  count: number
}

class CounterScreen extends React.Component<{}, CounterScreenState> {
  state = { count: 0 }

  render() {
    const { count } = this.state

    return (
      <PageLayout title="Counters">
        <div className="container">
          <h1 className="title is-1 has-text-centered">{count}</h1>
          <button
            className="button is-primary is-fullwidth"
            onClick={this.handleClick}
          >
            +
          </button>
        </div>
      </PageLayout>
    )
  }

  handleClick = () => this.setState({ count: this.state.count + 1 })
}

export default CounterScreen
