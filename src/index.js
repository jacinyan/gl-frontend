import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// BrowserRouter wraps App directly
import { BrowserRouter } from "react-router-dom";
import './bootstrap.min.css'
import './index.css'

// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



