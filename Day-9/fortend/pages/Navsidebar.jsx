import React from 'react';
import './NavbarSidebar.css';

const NavbarSidebar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <div className="sidebar">
        <ul className="sidebar-links">
          <li className="sidebar-item">Dashboard</li>
          <li className="sidebar-item">Profile</li>
          <li className="sidebar-item">Settings</li>
        </ul>
      </div>
      <div className="content">
        <h1>Content Area</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default NavbarSidebar;