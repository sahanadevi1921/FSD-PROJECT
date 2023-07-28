// import React from 'react'
// import './Payment.css';
// import { useState } from 'react';
// import Topbar from './Topbar';
// import SideBar from './SideBar';
// import axios from 'axios';

// function Payment() {
//   const[name,setName]=useState("");
//   const[bank,setBank]=useState("");
//   const[card,setCard]=useState("");
//   const[exdate,setExdate]=useState("");
//   const[cvv,setCvv]=useState("");
//   const[errors,setErrors]=useState({});
  
  // const handelDownload=()=>{
  //     var doc=new jsPDF('landscape','px','a4','false');
  //     // doc.rect(20, 20,592,400);
  //     doc.addImage(tk,'jpg',20,20,592,400);
  //     doc.save('tickets.pdf');
  // }
    
//   const validateForm = () => {
//     const errors = {};

//     if (name.trim() === '') {
//       errors.name = 'Name is required';
//     }
    
   
//     if (bank.trim() === '') {
//       errors.bank = 'Bank name is required';
//     } 
    
//     if (card === '') {
//       errors.card = 'Card number is required';
//     }
//     else if(card.length!==12){
//       errors.card = 'Card number is invalid';
//     }
//     if (cvv === '') {
//       errors.cvv = 'CVV is required';
//     }
//     else if(cvv.length!==3){
//       errors.cvv = 'CVV is invalid';

//     }
//     if (exdate.trim() === '') {
//       errors.exdate = 'Expiry date is required';
//     }
//     else if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exdate)){
//       errors.exdate = 'Expiry date is invalid';
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
//   async function handlePay(e){
//     const cvvnum=parseInt(cvv);
//     e.preventDefault();
//     if (validateForm()) {
//     try{
//       const data={
//         cardNumber:card,
//         cvc:cvvnum,
//         bankNname:bank,
//         cardholder:name,
//         expirydate:exdate
//       };
//       const res=await axios.post("http://localhost:8181/payment/add",data);
//       console.log(res);
//       alert("Orders is confirmed");
//       setVisible("block");
//     }catch(e){
//       console.log(e.message);
//     }
//     }
//   }
  
//     return ( 
//         <>
//       <div>
//         <Topbar/>
//         <SideBar/>
     
//     <div className="wrapper" style={{paddingTop:'70px'}}>
//       <div class="payment" style={{marginLeft:'100px',marginTop:"100px"}}>
//         <h2>Make Your Payment</h2>
//         <div class="form">
//           <div class="card space icon-relative">
//             <label className="label">Card holder:</label>
//             <input 
//              style={{backgroundColor:'lightyellow',color:'black'}}
//             type="text" class="input" id="Cardholder" value={name} onChange={(e) =>setName(e.target.value)}></input>
//             {errors.name && <span className="error-message">{errors.name}</span>}
//           </div>

//           <div class="card space icon-relative">
//             <label class="label">Bank Name</label>
//             <input 
//              style={{backgroundColor:'lightyellow',color:'black'}}
//             type="text" class="input" id="BankName" value={bank} onChange={(e) => setBank(e.target.value)} ></input>
//             {errors.bank && <span className="error-message">{errors.bank}</span>}
//           </div>
//           <div class="card space icon-relative">
//             <label class="label">Card number:</label>
//             <input 
//              style={{backgroundColor:'lightyellow',color:'black'}}
//             type="text" class="input" id="CardNumber" data-mask="0000 0000 0000 0000" placeholder="Card Number"  value={card} onChange={(e) => setCard(e.target.value)}></input>
//             {errors.card && <span className="error-message">{errors.card}</span>}
//           </div>
//           <div class="card-grp space">
//             <div class="card-item icon-relative">
//               <label class="label">Expiry date:</label>
//               <input 
//                style={{backgroundColor:'lightyellow',color:'black'}}
//               type="text" name="expiry-data" class="input" id="Expirydate" data-mask="00 / 00"  placeholder="00 / 00" value={exdate} onChange={(e) => setExdate(e.target.value)}></input>
//               {errors.exdate && <span className="error-message">{errors.exdate}</span>}
//             </div>
//             <div class="card-item icon-relative">
//               <label class="label">CVC:</label>
//               <input 
//                style={{backgroundColor:'lightyellow',color:'black'}}
//               type="text" class="input" id="cvc" data-mask="000" placeholder="000" value={cvv} onChange={(e) => setCvv(e.target.value)}></input>
//               {errors.cvv && <span className="error-message">{errors.cvv}</span>}
//             </div>
//           </div>
            
//         <center>
//         <div class="btn" onClick={handlePay}>
//             Pay Now
//           </div> 
//         </center>          
//         </div>
//       </div>
//     </div>
//     </div>
// </>
//      );
// }

// export default Payment;



































































































import React, { useState } from 'react';
import './Payment.css';
import SideBar from './SideBar';
import Topbar from './Topbar';

function msg() { 
  alert('Your order is confirmed!!!');
}

function Payment() {
  const [cardHolder, setCardHolder] = useState('');
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const isFormValid = cardHolder && bankName && cardNumber && expiryDate && cvc;

  const handlePayNow = () => {
    if (isFormValid) {
      msg();
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <>
      <div>
        <Topbar />
        <SideBar />

        <div className="wrapper" style={{ paddingTop: '70px', backgroundColor: 'white' }}>
          <h2 style={{ color: 'black' }}>Make Your Payment</h2>
          <div className="form">
            <div className="card space icon-relative">
              <label className="label">Card holder:</label>
              <input
                style={{backgroundColor:'lightyellow',color:'black'}}
                type="text"
                className="input"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="card space icon-relative">
              <label className="label">Bank Name</label>
              <input
               style={{backgroundColor:'lightyellow',color:'black'}}
                type="text"
                className="input"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="card space icon-relative">
              <label className="label">Card number:</label>
              <input
               style={{backgroundColor:'lightyellow',color:'black'}}
                type="text"
                className="input"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                data-mask="0000 0000 0000 0000"
                placeholder="Card Number"
                required
              />
              <i className="far fa-credit-card"></i>
            </div>
            <div className="card-grp space">
              <div className="card-item icon-relative">
                <label className="label">Expiry date:</label>
                <input
                 style={{backgroundColor:'lightyellow',color:'black'}}
                  type="text"
                  name="expiry-data"
                  className="input"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  data-mask="00 / 00"
                  placeholder="00 / 00"
                  required
                />
                <i className="far fa-calendar-alt"></i>
              </div>
              <div className="card-item icon-relative">
                <label className="label">CVC:</label>
                <input
                 style={{backgroundColor:'lightyellow',color:'black'}}
                  type="text"
                  className="input"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  data-mask="000"
                  placeholder="000"
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>

            <center>
              <div className="btn" onClick={handlePayNow} disabled={!isFormValid}>
                Pay Now
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;