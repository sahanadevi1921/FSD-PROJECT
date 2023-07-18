import React, { useState } from 'react';
import './Feedback.css';
import SideBar from './Sample/SideBar';
import Topbar from './Sample/Topbar';

function Feedback() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !query) {
      setFormError('Please fill in all fields.');
    } else {
      setIsSubmitted(true);
      setFormError('');

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setQuery('');
    }
    alert("Success");
  };

  const isFormValid = firstName && lastName && email && phoneNumber && query;

  return (
    <div>
          <Topbar />
      <SideBar />
    
    <div>
      <div className="contact_us_2">
        <div className="responsive-container8-block big-container8">
          <div className="blueBG"></div>
          <div className="responsive-container8-block container8">
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container8-block form-wrapper">
                <p className="text-blk contactus-head">Great To See You Here</p>
                <p className="text-blk contactus-subhead">Your Feedbacks Are Valuable To Us</p>
                <div className="responsive-container8-block">
                  <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                    <p className="text-blk input-title">FIRST NAME</p>
                    <input
                      type="text"
                      className="input"
                      id="ijowk"
                      name="FirstName"
                      placeholder="Enter first name..."
                      required
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input
                      type="text"
                      className="input"
                      id="indfi"
                      name="Last Name"
                      placeholder="Enter last name..."
                      required
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input
                      type="email"
                      className="input"
                      id="ipmgh"
                      name="Email"
                      placeholder="Enter email..."
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input
                      type="tel"
                      className="input"
                      id="imgis"
                      name="PhoneNumber"
                      placeholder="Enter phone number..."
                      required
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                    <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
                    <textarea
                      type="text"
                      className="textinput"
                      id="i5vyy"
                      placeholder="Please enter query..."
                      required
                      value={query}
                      onChange={handleQueryChange}
                    ></textarea>
                  </div>
                </div>
                {formError && <div className="error-message">{formError}</div>}
                {isSubmitted ? (
                  <div className="feedback-message">
                    Feedback Submitted <span className="tick-mark">&#10004;</span>
                  </div>
                ) : (
                  <button className="submit-btn" disabled={!isFormValid}>
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Feedback;