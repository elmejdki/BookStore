import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/index';
import { createBook } from './actions/index';
import './index.css';

const intialState = [
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'Harry Potter chapter 3',
    category: 'Action',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'James Bond 4',
    category: 'Action',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'Cracking the coding interview',
    category: 'Learning',
  },
];

intialState.map(book => store.dispatch(createBook(book)));

const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(
  jsx,
  document.getElementById('root'),
);

reportWebVitals();
