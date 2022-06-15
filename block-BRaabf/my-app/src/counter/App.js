import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
    };
  }
  handleIncrement = () => {
    let { step, count, max } = this.state;
    this.setState({
      count: count + step > max ? count : count + step,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };
  reset = () => {
    this.setState({
      count: 0,
      step: 5,
      max: 15,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <div>
          <h3>Steps</h3>
          {[5, 10, 15].map((step) => (
            <button
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? 'active--step' : ''}
            >
              {step}
            </button>
          ))}
          <div>
            <h3>Max</h3>
            {[15, 100, 200].map((max) => (
              <button
                onClick={() => {
                  this.setState({ max: max });
                }}
                className={this.state.max === max ? 'active--step' : ''}
              >
                {max}
              </button>
            ))}
          </div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </>
    );
  }
}

export default App;
