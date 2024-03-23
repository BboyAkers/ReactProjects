import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {

  state = { imageList: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID <AccessID>`
      }
    });
    this.setState({ imageList: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.imageList.map(image => {
          return (
            <p>{image.description}</p>
          )
        })}
      </div>
    )
  }
}

export default App