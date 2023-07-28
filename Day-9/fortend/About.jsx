import React from 'react';
// import './Support.css';
//  import Navbar from './Navbar';
import Topbar from './Sample/Topbar';
import SideBar from './Sample/SideBar';
import './about.css'
const About = () => {
  return (
    <div>
      
      <Topbar />
      <SideBar />
    {/* <Navbar />  */}
    <div className="ground">
    <div className="contact-container">
    <div className='content-ffn'>
    <h1>About us</h1>
    <div className='photo'>
    
    </div>
    </div>
    <div className='content-ff2'>
    <h2>
     At Timepiece Emporium, we are passionate about watches. 
     We believe that a watch is not just a timekeeping device but a reflection of one's personal style, elegance, and 
     sophistication. With our carefully curated collection of high-quality timepieces, we strive to offer our customers 
     a wide range of options to find the perfect watch that suits their individual taste.{"\n"}
     </h2>
    
    </div>
    </div>
    </div>
    </div>
  );
}

export default About;