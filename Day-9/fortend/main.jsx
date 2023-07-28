import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import AppFooter from './terms'
// import Box from './ele'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <  App/>
  </BrowserRouter>,
)
