import React from 'react';
import Topbar from './Topbar';
import SideBar from './SideBar';
import './Sample.css';

function Dashboard() {

  const cardImages = [
    'https://tse3.mm.bing.net/th?id=OIP.370HgPVrSqi8H0bQFFspKgHaEh&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.Wb_pVNT25_QfcHkWGm254QHaEK&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.PHYmNinaBdo3y3jSQBoeZAHaEK&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.TYCwDc1J3ZOLhZoX-5rw3QHaEo&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.a-UHqQ57_E51s3ZdIJRJSwHaHa&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.ThNxPmw8HdSQZ35L04YFOwHaGi&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.x3gcU0hRU12cwZBJj0POQAHaHa&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.GuarrpxSroabpDt6aPPkAAHaFV&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.nAzaOvTQyV6S-EFCj5_M3gHaHa&pid=Api&P=0&h=180',
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
