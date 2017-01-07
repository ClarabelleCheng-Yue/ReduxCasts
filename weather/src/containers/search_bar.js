import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.obj = {};
  }

  onInputChange(event) {
    this.setState({ term: event });
  }

  onFormSubmit(event) {
    // don't submit the form so page doesnt refresh
    event.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form 
        onSubmit={this.onFormSubmit.bind(this)}
        className="input-group">
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

// hook up action creator fetchweather to searchbar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// actions always second argument. don't need to pass in state props in first param
export default connect(null, mapDispatchToProps)(SearchBar);
