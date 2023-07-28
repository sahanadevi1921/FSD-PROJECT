import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Main() {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="main">
      <header className="maincon">
        <h1 style={{paddingBottom:'30%'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>Ecommerce</h1>
        <div className="role-selection" >
          <h3  className="hel" style={{paddingBottom:'30px',fontSize:'30px',color:'black'}}>May I know who are you?</h3>
          <div className='gg'>
              <button
                className={`role_btns ${selectedRole === 'Manager' ? 'selected' : ''}`}
                onClick={() => handleRoleSelection('Manager')}>
              <Link  to='/Alogin' style={{color:'black',textDecoration:'none'}}>
                Admin
              </Link>
              </button>
                <br></br>
              <button
                className={`role_btns ${selectedRole === 'Employee' ? 'selected' : ''}`}
                onClick={() => handleRoleSelection('Employee')}>
                <Link to='/login'style={{color:'black',textDecoration:'none'}} >
                 User
                </Link>
              </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Main;