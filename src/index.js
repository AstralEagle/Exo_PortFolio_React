import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './utils/Router';
import './styles/default.css';
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
