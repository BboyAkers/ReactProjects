import React, { Component } from 'react';
import { connection } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  render() {
    return (
      <form className="input-group">
        <input placeholder="Choose city for 5 day forcast" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}