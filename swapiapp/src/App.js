import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { results: [] }

  componentDidMount() {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({ results: data.results })
      });
  }

  render() {
    return (
      <div className="App">
        <h1>SWAPI App</h1>

        {this.state.results.map(item => {
          return (
            <p key={item.name}>{item.name}</p>
          )
        })}
      </div>
    );
  }
}

export default App;
