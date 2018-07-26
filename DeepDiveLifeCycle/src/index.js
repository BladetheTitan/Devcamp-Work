import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowerRouter>
  , document.querySelector('.app-wrapper'));