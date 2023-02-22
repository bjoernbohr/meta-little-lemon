import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Footer} from './components/Footer/Footer';
import {Navigation} from './components/Nav/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navigation />
        <App />
        <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
