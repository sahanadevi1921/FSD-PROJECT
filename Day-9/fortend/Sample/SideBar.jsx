import React from 'react'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <div>
      <div className="sidebar-wrapper">

        <div className="sidebar-contents">


          {/* <button className='nav-btn'>Profile</button>
        <button className='nav-btn'>Products</button>
            <button className='nav-btn'>Shoping cart</button>
            <button className='nav-btn'>Orders</button>
            <button className='nav-btn'>Payment</button>
            <button className='nav-btn'>About as</button> */}
          <ul>
            {/* <li>
              <Link to='/Profile'></Link>
            </li> */}
            {/* <li>
              <Link to='/Products'>Products</Link>
            </li> */}
            <li>
              <Link to='/ShopingApp'>Products</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact us</Link>
            </li>
            <li>
              <Link to='/Privacypolicy'>PrivacyPolicy</Link>
            </li>
            <li>
              <Link to='/About'>About us</Link>
            </li>
            <li>
              <Link to='/Feedback'>FeedBack</Link>
            </li>
            <li style={{paddingTop:"350px"}}>
          <Link to='/login'><a>LOGOUT</a></Link> 
          </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default SideBar