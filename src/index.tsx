import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Magic Juice</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
