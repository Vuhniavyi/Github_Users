import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from "./Pages/UserPage.js"

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/:user" exact component={UserPage} />
  </BrowserRouter>,
  document.querySelector('#root'),
);

