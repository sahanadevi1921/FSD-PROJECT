import React, { useState } from 'react';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
const navigate=useNavigate();
  const handleSubmit = (e) => {
   if(name===''&& address==='' && city==='' && country==='' && gender===''){
    setError('Please fill in all fields');
   }
   else {
    alert('Registration succesfull');
    navigate('/Login');
   }

  };

  return (
    <div className="reg-container">
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="agreeTerms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />{' '}
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" >Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;

