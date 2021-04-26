import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



window.baseUrl = "http://localhost:7171";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);