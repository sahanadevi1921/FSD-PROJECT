import React from 'react';
import './contact.css'
import Topbar from './Sample/Topbar';
import SideBar from './Sample/SideBar';
const Contact=() => {
    return ( 
        <div>
            <Topbar />
      <SideBar />
            <div className="contact-wrapper">
<div className="contact-contents">
    <h1>Contact us</h1>
        <p>
            You can reach our customer support team to address any of your queries or complaints 
            related to product and services by writing to customer@ss.com phone:+91-80-6789053.
        </p>
</div>
</div>
</div>
     );
}

export default Contact;