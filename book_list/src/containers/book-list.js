import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={ book.title } 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {
          this.renderList()
        }
      </ul>
    );
  }
}

// connect redux state to this container
function mapStateToProps(state) {
  // whatever is returned here will show up as this.props inside of BookList
  // if state changes, container will auto rerender
  return {
    books: state.books
  };
}

// connect action creator to this container
// anything returned from this fn will end up as props on the booklist container
// name of prop is prop in arg object
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, 
  // the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote booklist from a componenet to a container,
// it needs to know about dispatch method, selectbook. 
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);