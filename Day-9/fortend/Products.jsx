import React from 'react';
import Button from '@mui/material/Button';
import Topbar from './Sample/Topbar';
import SideBar from './Sample/SideBar';
import './product.css';
import { Link } from 'react-router-dom';

function Product() {

  const cardImages = [
    'https://tse3.mm.bing.net/th?id=OIP.370HgPVrSqi8H0bQFFspKgHaEh&pid=Api&P=0&h=180',
    
    'https://tse2.mm.bing.net/th?id=OIP.Wb_pVNT25_QfcHkWGm254QHaEK&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.PHYmNinaBdo3y3jSQBoeZAHaEK&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.ToxdAGmvt9z_TK5PI7XHFwHaHa&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.PHYmNinaBdo3y3jSQBoeZAHaEK&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.ThNxPmw8HdSQZ35L04YFOwHaGi&pid=Api&P=0&h=180',
    'https://ae01.alicdn.com/kf/HTB1XaIpbc_vK1RkSmRyq6xwupXax/Top-Brand-Small-And-Elegant-Ladies-Small-Dial-Watch-Women-Charm-Bracelet-Watch-Luminous-Girl-Fashion.jpg',
    'https://tse1.mm.bing.net/th?id=OIP.6_l031TvjPe669lTdPvtrwHaHa&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.F8zVjKZGnN59wZz_4pQ-OgHaHa&pid=Api&P=0&h=180',
    'https://i0.wp.com/ae01.alicdn.com/kf/HTB17gmgah2rK1RkSnhJq6ykdpXa2/Top-Brand-High-Quality-font-b-Fashion-b-font-font-b-Womens-b-font-Ladies-Simple.jpg?crop=5,2,900,500&quality=2886',
    'https://tse4.mm.bing.net/th?id=OIP.MDtjPabMYZtjGSnwvkDBoQHaDt&pid=Api&P=0&h=180',

  ];
  // function getImageNameFromUrl(url) {
  //   const parts = url.split('/');
  //   return parts[parts.length - 1];
  // }

  return (
    <div>
      <Topbar />
      <SideBar />
      <div className="dashboard-wrapper">
        {/* <h1>Welcome</h1> */}
        <div className="card-container">
          {cardImages.map((imageUrl, index) => (
            <div className="card" key={index}>
              <img className="card-ima" src={imageUrl} alt={`Card ${index}`} />
              <div className="card-con">
                <h4>Product {index + 1}</h4>
                <p1>Price $500</p1>
                {/* <p>Image Name: {watch(imageUrl)}</p> */}
                {/* <Link to='/Addtocart'><Button type='submit'>Add To Cart</Button></Link> */}
      <Button type='submit'><Link to='/Card'>Add To Cart</Link></Button>
       {/* <ul> 
      <li>
              <Link to='/Addtocart'>ADD TO CART</Link>
            </li>
      </ul> */}
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
    }
export default Product