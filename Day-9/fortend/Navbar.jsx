import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="home-container">
      <h1>Welcome To The Ecommerce Website</h1>
      <div className="button-container">
        <button className="admin-button"><Link to='/Alogin'>
          Admin
          </Link>
          </button>
        <button className="user-button"><Link to='/login'>
          User
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Navbar;
