import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => (
  <table>
    <thead>
      <tr>
        <th>BookID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove Book</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map(book => (
          <Book
            key={book.bookID}
            bookID={book.bookID}
            title={book.title}
            category={book.category}
            handleRemoveBook={removeBook}
          />
        ))
      }
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook };

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
