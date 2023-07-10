
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/login'
import './App.css'
import RegistrationForm from './pages/register'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<RegistrationForm/>}/>
      </Routes>
    </>
  )
}
export default App

