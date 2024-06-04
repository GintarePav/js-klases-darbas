import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import AppFirst from './components/app_first/AppFirst';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

