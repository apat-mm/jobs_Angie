import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SecondsToFromated } from './components/ej1';
//import FormatH from './taller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecondsToFromated/>
  </React.StrictMode>
);