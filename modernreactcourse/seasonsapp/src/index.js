import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {

  state = { latitude: null, longitude: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position
        this.setState({ latitude: coords.latitude, longitude: coords.longitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          <h2>{this.state.errorMessage}</h2>
        </div>
      )
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay lat={this.state.latitude} />
        </div>
      )
    }
    return <Spinner message="Please accept location request" />
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
