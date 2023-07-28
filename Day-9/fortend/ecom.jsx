import React, { useState } from 'react';
import './Support.css';
// import { Link } from 'react-router-dom';
// import SideBar from './Sample/SideBar';
// import Topbar from './Sample/Topbar';

const Ap = () => {
  const [isActive, setIsActive] = useState(false);
  const [listCards, setListCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // New state for the search query

  const products = [
    {
        id: 1,
        name: 'WATCH',
        image: 'https://tse3.mm.bing.net/th?id=OIP.TYCwDc1J3ZOLhZoX-5rw3QHaEo&pid=Api&P=0&h=180',
        price: 1200
      },
      {
        id: 2,
        name: 'TSHIRT',
        image: 'https://th.bing.com/th/id/OIP.h4uLCfXF6wy4z35Ho2p1UAHaLH?w=199&h=299&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 120
      },
      {
        id: 3,
        name: 'TSHIRT',
        image: 'https://th.bing.com/th?id=OIP.V9AqSV6ym6WFX5KZYgPziAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        price: 220
      },
      {
        id: 4,
        name: 'KURTHA',
        image: 'https://th.bing.com/th/id/OIP.6dJAMCeUWmMhMGL02bLvkwHaKX?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 1230
      },
      {
        id: 5,
        name: 'BAG',
        image: 'https://th.bing.com/th/id/OIP.hwGg5-YuLdUsS00UYyWfwgHaHa?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 3200
      },
      {
        id: 6,
        name: 'BANGLE',
        image: 'https://th.bing.com/th/id/OIP.8Oikm36VscgpCSRH_KXPGQHaFw?w=283&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 12000
      },
      {
        id: 7,
        name: 'SHOES',
        image: 'https://th.bing.com/th/id/OIP.x1S67j_s5SuFo9xJg9z4JgHaEj?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 1500
      },
      {
        id: 8,
        name: 'IPHONE MODEL 11',
        image: 'https://th.bing.com/th/id/OIP.orbNwAKm4fFxQzSUlLPVEgHaEU?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 150000
      },
      {
        id: 8,
        name: 'EARBUDS',
        image: 'https://th.bing.com/th/id/OIP.gfV_T_rMcfqelnZQCr0sSAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 30000
      },
      {
        id: 9,
        name: 'JEWELRY',
        image: 'https://th.bing.com/th/id/OIP.A4-gmh-NLVVOADqh0WOeSgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 20000
      },
      {
        id: 10,
        name: 'MAKEUP ITEMS',
        image: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/640w/products/214168/500388/61rQpJRjYvL._AC_SL1000___04066.1677233951.jpg?c=1',
        price: 10000
      },
      {
        id: 11,
        name: 'JEWELRY',
        image: 'https://th.bing.com/th/id/OIP.A4-gmh-NLVVOADqh0WOeSgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 20000
      },
    ];
    const openShopping = () => {
        setIsActive(true);
      };
    
      const closeShopping = () => {
        setIsActive(false);
      };
    
      const addToCard = (key) => {
        const newCard = { ...products[key], quantity: 1 };
        const updatedListCards = [...listCards];
        updatedListCards[key] = newCard;
        setListCards(updatedListCards);
      };
      const handleBuyNow = () => {
        setIsActive(false);
      };
    
      const changeQuantity = (key, quantity) => {
        if (quantity === 0) {
          delete listCards[key];
        } else {
          const updatedCard = { ...listCards[key], quantity, price: quantity * products[key].price };
          const updatedListCards = [...listCards];
          updatedListCards[key] = updatedCard;
          setListCards(updatedListCards);
        }
      };
    
      const getTotalPrice = () => {
        let totalPrice = 0;
        listCards.forEach((card) => {
          if (card) {
            totalPrice += card.price;
          }
        });
        return totalPrice.toLocaleString();
      };
    
      const getCount = () => {
        let count = 0;
        listCards.forEach((card) => {
          if (card) {
            count += card.quantity;
          }
        });
        return count;
      };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // <div>
    //   <Topbar />
    //   <SideBar />
      <div className="saha">
        <div className={`shopcontainer ${isActive ? 'active' : ''}`}>
          <header>
          <h1>PRODUCTS</h1>
        <div className="shopping" onClick={openShopping}>
          <img src="https://tse3.mm.bing.net/th?id=OIP.asFkUhiST8gZ5javXVEcegHaHP&pid=Api&P=0&h=180" alt="Shopping Cart" />
          <span className="quantity">{getCount()}</span>
        </div>
          </header>

          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div className="lim">
          {products.map((value, key) => (
          <div key={key} className="ite">
            <img src={value.image} alt={value.name} />
            <div className="title">{value.name}</div>
            <div className="price">{value.price.toLocaleString()}</div>
            <button onClick={() => addToCard(key)}>Add To Card</button>
          </div>
        ))}
            {filteredProducts.map((value, key) => (
              // ... Your product item rendering ...
            ))}
          </div>

          {/* ... Rest of the component ... */}
        </div>
      </div>
    // </div>
  );
};

export default Ap;