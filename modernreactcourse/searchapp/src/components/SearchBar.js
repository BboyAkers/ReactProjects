import React, { Component } from 'react';

class SearchBar extends Component {

  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label htmlFor="searchbar">Image Search</label>
            <input type="text" name="searchbar"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;