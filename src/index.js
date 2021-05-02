/**
 * Provides App Stylesheets, React-Redux Provider, and Rendering
 * @licence MIT
 * @copyright 2021 T. H. Case
 * @author T.H. Case <thcase@outlook.com>
 */

// NPM Imports
import React from 'react'
import ReactDOM from 'react-dom'

// Local Imports
import App from './App'
import reportWebVitals from './reportWebVitals'

// Stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
