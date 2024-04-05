import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, longitude: null }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position
        this.setState({ latitude: coords.latitude, longitude: coords.longitude })
      },
      (error) => console.log(error)
    );
  }
  render() {

    return (
      <div>
        <h1>Latitude: {this.state.latitude}</h1>
        <h1>Longitude: {this.state.longitude}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
