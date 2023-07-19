
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/login'
import './App.css'
import RegistrationForm from './pages/register'
import Dashboard from './Sample/Dboard';
import About from './About'
import Privacy from './Privacypolicy'
import Contact from './contact'
import Product from './Products'
import BuyNowPage from './Sample/Addtocart'
import Payment from './Sample/Payment'
import Feedback from './Feedback'
import Add from './Card'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<RegistrationForm/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/Dboard" element={<Dashboard/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Privacypolicy" element={<Privacy/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/Products" element={<Product/>}/>
        <Route exact path="/Feedback" element={<Feedback/>}/>
        <Route exact path="/Card" element={<Add/>}/>
        <Route exact path="/Addtocart" element={<BuyNowPage />}/>
        <Route exact path="/Payment" element={<Payment/>}/>
      </Routes>
    </>
  )
}
export default App

