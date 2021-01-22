import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { ProductsProvider } from './Main';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ProductsProvider>
    <Router>
      <App />
    </Router>
  </ProductsProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
