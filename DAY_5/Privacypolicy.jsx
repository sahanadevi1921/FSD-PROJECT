import React from 'react';
import Topbar from './Sample/Topbar';
import SideBar from './Sample/SideBar';
import './Privacy.css'
function Privacy() {
    return (
      <>
       <div>
            <Topbar />
      <SideBar />
        <div className='body'>
          <h1 style={{textAlign:'center',fontFamily:'cursive',fontSize:'30px'}}>
            Privacy &nbsp;Policy
          </h1>
          {/* <div className='content'>
            <div className='home-content'> */}
            <h4 style={{fontSize: "1.2em"}}>
            A Privacy Policy is a legal requirement if you are collecting personal data from users. Personal data may include anything from names, email, IP addresses to cookies that you use on websites. Hence, it is a good rule of thumb to add a privacy policy on your website or app.
            </h4>
            <h4 style={{fontSize: "1.2em"}}>
            Our Privacy Policy Generator will help you create a custom privacy policy for your business and make sure that you are compliant with privacy laws around the world, such as General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA) and many more
                  
            </h4>
            <h4 style={{fontSize: "1.2em"}}>
              persanal details will be securliy 
            </h4>
          {/* </div>
          <div className='footer'>
            <p style={{paddingBottom:'90px'}}>Please read our <Link to='./privacy' style={{color:'powderblue'}}>privacy policy</Link></p>
          </div>
          </div> */}
        </div>
        </div>
        </>
    );
}

export default Privacy;