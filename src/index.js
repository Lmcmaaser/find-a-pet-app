import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Store from './dummy-store';
import './index.css';
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider template={AlertTemplate}>
      <App data={Store}/>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
