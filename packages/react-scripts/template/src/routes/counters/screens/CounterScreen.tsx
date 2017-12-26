import * as React from 'react'

export interface CounterScreenState {
  count: number
}

class CounterScreen extends React.Component<{}, CounterScreenState> {
  state = { count: 0 }

  render() {
    const { count } = this.state

    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Counter: {count}</h1>
          <br />
          <button
            className="button is-primary is-fullwidth"
            onClick={this.handleClick}
          >
            +
          </button>
        </div>
      </section>
    )
  }

  handleClick = () => this.setState({ count: this.state.count + 1 })
}

export default CounterScreen
