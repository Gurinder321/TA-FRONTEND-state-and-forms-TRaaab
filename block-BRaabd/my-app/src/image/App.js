import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Basketball',
    };
  }
  render() {
    let labels = ['Basketball', 'PubG', 'Tiger', 'Phone', 'Laptop', 'Cricket'];
    return (
      <>
        <div className="buttons">
          {labels.map((label) => (
            <button
              key={label}
              className={this.state.active === label ? 'active' : ''}
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <img src={`./images/${this.state.active}.jpg`} alt={this.state.active} />
      </>
    );
  }
}

export default App;
