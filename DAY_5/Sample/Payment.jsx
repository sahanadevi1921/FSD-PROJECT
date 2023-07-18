import React, { useState } from 'react';
import './Payment.css';
import SideBar from './SideBar';
import Topbar from './Topbar';

function msg() {
  alert('Your order is confirmed!!!');
}

function Payment() {
  const [cardHolder, setCardHolder] = useState('');
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const isFormValid = cardHolder && bankName && cardNumber && expiryDate && cvc;

  const handlePayNow = () => {
    if (isFormValid) {
      msg();
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <>
      <div>
        <Topbar />
        <SideBar />

        <div className="wrapper" style={{ paddingTop: '70px', backgroundColor: 'white' }}>
          <h2 style={{ color: 'black' }}>Make Your Payment</h2>
          <div className="form">
            <div className="card space icon-relative">
              <label className="label">Card holder:</label>
              <input
                type="text"
                className="input"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="card space icon-relative">
              <label className="label">Bank Name</label>
              <input
                type="text"
                className="input"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="card space icon-relative">
              <label className="label">Card number:</label>
              <input
                type="text"
                className="input"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                data-mask="0000 0000 0000 0000"
                placeholder="Card Number"
                required
              />
              <i className="far fa-credit-card"></i>
            </div>
            <div className="card-grp space">
              <div className="card-item icon-relative">
                <label className="label">Expiry date:</label>
                <input
                  type="text"
                  name="expiry-data"
                  className="input"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  data-mask="00 / 00"
                  placeholder="00 / 00"
                  required
                />
                <i className="far fa-calendar-alt"></i>
              </div>
              <div className="card-item icon-relative">
                <label className="label">CVC:</label>
                <input
                  type="text"
                  className="input"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  data-mask="000"
                  placeholder="000"
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>

            <center>
              <div className="btn" onClick={handlePayNow} disabled={!isFormValid}>
                Pay Now
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;