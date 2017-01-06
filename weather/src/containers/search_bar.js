import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.obj = {};
  }

  onInputChange(event) {
    // console.log('event, this: ', event.target.value, this);
    console.log('event, this: ', event, this);
    // this.setState({ term: event.target.value });
    this.setState({ term: event });
  }

  render() {
    return (
      <form className="input-group">
        <input 
          placeholder="Enter a city"
          className="form-control"
          value={this.state.term}
          // onChange={this.onInputChange} />
          onChange={event => this.onInputChange(event.target.value)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Weather me!</button>
        </span>
      </form>
    );
  }
}
