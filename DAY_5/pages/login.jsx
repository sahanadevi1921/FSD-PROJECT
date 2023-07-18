import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword]=useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
   if(email==='' && password===''){
    setError('');
  }
  else{
    setError('Invalid email or password');
  }
  alert("Login is successfull");
  navigate('/Dboard');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  return (
    <div className="login-con">
      <div className="login-form">
        <h2 className="login-header">Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
              Forgot Password?
            </a>
          <button type="submit" onChange={handleSubmit} required>
            Sign In
          </button>
          <a href="/register">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
