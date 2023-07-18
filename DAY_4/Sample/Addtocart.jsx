import React, { useState } from 'react';
import './AddToCart.css';
import Topbar from './Topbar';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const BuyNowPage = () => {
  const [shippingAddress, setShippingAddress] = useState('');

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleBuyNow = () => {
    if (shippingAddress.trim() === '') {
      alert('Please enter your shipping address.');
    } else {
      window.location.href = `/Payment?address=${encodeURIComponent(shippingAddress)}`;
    }
  };

  return (
    <div>
      <Topbar />
      <SideBar />
      <div className="Buy-tag">
        <div className="buy-now-page">
          <h1>Buy Now</h1>
          <div className="shipping-section">
            <h2>Shipping Address</h2>
            <textarea
              rows="4"
              value={shippingAddress}
              onChange={handleAddressChange}
              placeholder="Enter your shipping address"
            ></textarea>
          </div>
          <button onClick={handleBuyNow}>
            <Link to="/Payment">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;