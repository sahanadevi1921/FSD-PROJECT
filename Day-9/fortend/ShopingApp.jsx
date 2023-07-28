import React, { useState } from 'react';
import './Support.css';
import { Link } from 'react-router-dom';
import SideBar from './Sample/SideBar';
import Topbar from './Sample/Topbar';
const Ap = () => {
  const [isActive, setIsActive] = useState(false);
  const [listCards, setListCards] = useState([]);
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
      image: 'https://th.bing.com/th/id/R.6cef1a0d1f922ff24e4f2108673a56dc?rik=UpUNe23iL0PiRw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33400000%2fPink-heels-womens-shoes-33470331-1600-1188.jpg&ehk=abX8oBWv%2bg1emeJe7flzgqpDeDtcISPwalZ0GrTCFbc%3d&risl=&pid=ImgRaw&r=0',
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
      image: 'https://th.bing.com/th/id/OIP.1G4CZqkQ6tr4Dck_ER6J4wHaEK?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 30000
    },
    {
      id: 9,
      name: 'JEWELRY',
      image: 'https://3.bp.blogspot.com/-F4QL9MdpiDE/V3Lpx5grPLI/AAAAAAAAZzc/l9FQGI76n5o7NSFIM9XH5tMxr8JeL5XVQCLcB/s1600/70gms-pure-gold-necklace.jpg',
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
      name: 'Apple Laptop',
      image: 'https://th.bing.com/th/id/OIP.Oj6Tce6XLowcJm2jGzRcuAHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 100000
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

  return (
    <div>
      <Topbar />
      <SideBar/>
   <div className='saha'>

   
    <div className={`shopcontainer ${isActive ? 'active' : ''}`}>
      <header>
        <h1>PRODUCTS</h1>
        <div className="shopping" onClick={openShopping}>
          <img src="https://tse3.mm.bing.net/th?id=OIP.asFkUhiST8gZ5javXVEcegHaHP&pid=Api&P=0&h=180" alt="Shopping Cart" />
          <span className="quantity">{getCount()}</span>
        </div>
      </header>

      <div className="lim">
        {products.map((value, key) => (
          <div key={key} className="ite">
            <img src={value.image} alt={value.name} />
            <div className="title">{value.name}</div>
            <div className="price">{value.price.toLocaleString()}</div>
            <button onClick={() => addToCard(key)}>Add To Card</button>
          </div>
        ))}
      </div>

      <div className="cardpp">
        <h6>Card</h6>
        <ul className="listCard">
          {listCards.map((value, key) => {
            if (value) {
              return (
                <li key={key}>
                  <div>
                    <img src={value.image} alt={value.name} />
                  </div>
                  <div>{value.name}</div>
                  <div>{value.price.toLocaleString()}</div>
                  <div>
                    <button onClick={() => changeQuantity(key, value.quantity - 1)}>-</button>
                    <div className="count">{value.quantity}</div>
                    <button onClick={() => changeQuantity(key, value.quantity + 1)}>+</button>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div className="checkOut">
          <div className="total">{getTotalPrice()}</div>
          <div className="closeShopping" onClick={closeShopping}>Close</div>
          <button onClick={handleBuyNow}>
          <Link to='/Addtocart'>
          Buy Now
        </Link></button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Ap;
