import React from 'react'; // Create a separate CSS file for your styles
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    
  return (
    <div>
      <div className="header">
        <h1>Ecommerce Website</h1>

        <ul className="nav">
          <li>
          <Link to='/login'><a>LOGOUT</a></Link> 
          </li>
          <li>
          <Link to='/register'><a>SIGNUP</a></Link> 
          </li>
          
        </ul>
      </div>
      <div className="sidebar">
      <ul className="sidebar-links">
        <li>
        <Link to='/Dashboard'><a href="#">DASHBOARD</a></Link> 
        </li>
        <li>
        <Link to='/about'><a href="#">SHOPING CART</a></Link> 
        </li>
        <li><a href="#">ORDERS</a></li>
        <li><a href="#">PAYMENT</a></li>
      </ul>
    </div>
    <div className="dashboard-wrapper">

        <h1> Hello World</h1>
      </div>
      <div className="headerbg"></div>
      <div className="line-1"></div>
    </div>
  )
}
  export default Sidebar;


