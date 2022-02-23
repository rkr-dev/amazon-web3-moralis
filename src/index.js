import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId={process.env.REACT_APP_APPLICATION_ID}
      serverUrl={process.env.REACT_APP_SERVER_URL}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);