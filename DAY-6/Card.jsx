import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './card.css';
import Topbar from './Sample/Topbar';
import SideBar from './Sample/SideBar';

function Add() {
  const { index } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const calculatePrice = () => {
    const basePrice = 500; // Assuming a base price of $500
    return basePrice * quantity;
  };

  const handleAddToCart = () => {
    // Perform logic to add the product with the selected quantity to the cart
    console.log(`Product ${index} added to cart with quantity ${quantity}`);
  };

  return (
    <div>
      <Topbar />
      <SideBar />
      <div className='cover-cont'>
    <div className="add-to-cart-page">
      <h1>Add to Cart</h1>
      <div className="product-details">
        <h3>Product {index}</h3>
        <p>Price: ${calculatePrice()}</p>
      </div>
      <div className="quantity-container">
        <button
          className="quantity-button"
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button
          className="quantity-button"
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        <Link to='/Addtocart'>
          Add to Cart
        </Link>
      </button>
    </div>
    </div>
    </div>
  );
}

export default Add;
