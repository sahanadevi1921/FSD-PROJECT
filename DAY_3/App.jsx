
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/login'
import './App.css'
import RegistrationForm from './pages/register'
import Sidebar from './Sidebar'
import Dashboard from './pages/Dashboard';
//import SearchAppBar from './pages/Homepage'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<RegistrationForm/>}/>
        <Route exact path="/Sidebar" element={<Sidebar/>}/> 
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        {/* <Route exact path="/Homepage" element={<SearchAppBar/>}/> */}
      </Routes>
    </>
  )
}
export default App

