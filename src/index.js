import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/default.css';
import './styles/main.css';
import Router from './utils/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
