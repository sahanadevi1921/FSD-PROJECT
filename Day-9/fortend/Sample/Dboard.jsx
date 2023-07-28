import React from 'react';
import Topbar from './Topbar';
import SideBar from './SideBar';
import './Sample.css';

function Dashboard() {

  const cardImages = [
    'https://th.bing.com/th/id/OIP.jo4KPONw4i7E9m2i3js_hAHaI3?w=149&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.ZhdUBlxrVbnEFQ4qZufF4QHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.uKYgfqaljPLmCJC9BxPKGwHaIq?w=202&h=236&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://tse3.mm.bing.net/th?id=OIP.TYCwDc1J3ZOLhZoX-5rw3QHaEo&pid=Api&P=0&h=180',
    'https://th.bing.com/th/id/OIP.N44O8aulHo_ReIrs6LxAjwHaJQ?w=149&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.dZ9b6UU1wwC9g0zwIyVUHgHaJO?w=171&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.hScB5pje2o1oe4eNO2NmkwHaGx?w=218&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://tse2.mm.bing.net/th?id=OIP.GuarrpxSroabpDt6aPPkAAHaFV&pid=Api&P=0&h=180',
    'https://th.bing.com/th/id/OIP.uxhB49W47ORVDBVG81dPOQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://tse1.mm.bing.net/th?id=OIP.DRjEytJNaV49L2Sbp7ILhgHaF_&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.tKtBCDb_O1pMGcdgNtTWSAHaHa&pid=Api&P=0&h=180',
  ];

  return (
    <div>
      <Topbar />
      <SideBar />
      <div className="dashboard-wrapper">
        {/* <h1>Welcome</h1> */}
        <div className="card-container">
          {cardImages.map((imageUrl, index) => (
            <div className="card" key={index}>
              <img className="card-image" src={imageUrl} alt={`Card ${index}`} />
              <div className="card-content">
                <h3>Product {index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
    }
export default Dashboard
