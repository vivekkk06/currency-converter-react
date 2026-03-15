import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// here we are creating a root element and rendering the app 
const root = ReactDOM.createRoot(document.getElementById('root'));

// here we use the root ele for rendering 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);