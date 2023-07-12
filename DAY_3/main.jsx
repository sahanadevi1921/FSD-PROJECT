import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
 import App from './App'
//import MenuPopupState from './pages/Homepage'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
