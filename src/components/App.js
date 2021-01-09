import React from 'react';
import BooksForm from '../container/BooksForm';
import BooksList from '../container/BooksList';
import Header from './Header';
import './App.css';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="page-container">
      <Header />
      <div className="content-container">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  </div>
);

export default App;
