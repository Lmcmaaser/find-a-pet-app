import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Store from './dummy-store';
import './index.css';
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
    <App data={Store}/>
  </BrowserRouter>,
  document.getElementById('root')
);
