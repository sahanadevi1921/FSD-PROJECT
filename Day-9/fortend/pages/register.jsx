import React, { useState } from 'react';
import axios from 'axios';
import './rform.css';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setErrors] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== checkPassword) {
      setErrors('Passwords do not match');
      return;
    }
    validateEmail()
    setIsSubmit(true);

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.status);

      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/login');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }

    if (isSubmit) {
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className='logmain'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
         <center> <h1 className='sig'>REGISTER</h1></center>
        </div>
        <br></br>
        <div>
          <input
            type="text"
            placeholder='Username'
            id="username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='Email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* <div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option className='sl' value="">Select the Role</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>
        </div> */}
        <div>
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='ConfirmPassword'
            id="checkPassword"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className='error'>{error}</p>}
       <center></center> <button type="submit">Sign Up</button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default RegistrationForm;
















































































































// import React, { useState } from 'react';
// import './RegistrationForm.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationForm= () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [ConfirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }


//   const handleBlur = (e) => {
//     // Implement your blur handling logic here, if needed.
//   };

//   const handleChange = (e) => {
//     // Implement your confirm password change handling logic here, if needed.
//     const { name ,value} = e.target;
//     if (name === 'Confirmpassword') {
//       // Handle confirm password logic
//     }
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const BASE_URL = "http://localhost:8080";
//     // Make the API request to register
//     axios.post(BASE_URL + '/users/register', { name, email, password ,ConfirmPassword})
//       .then(response => {
//         // Handle the successful registration (e.g., set authentication state, redirect, etc.)
//         console.log('Registered:', response.data); 
//         alert("Registered Successfully");
//         navigate('/login');

//       })
//       .catch(error => {
//         // Handle registration error (e.g., display error message)
//         console.error('Registration failed:', error.response.data);
//       });
      
//   };


//   return (
//     <div className="body1">
//     <div name="class1">
    
//       <br/>
//       <br></br>
//       <form className="form1" onSubmit={handleSignUp}>
//       <center><h1 className="hh1">REGISTRATION</h1></center>
//         <label className="name1">
//         </label>  
//         <div className="fld1">
//           <input
//             type="text"
//             placeholder="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             onBlur={handleBlur}
//             required
//           />
//           </div>
//           {errors.name && touched.name ? <p>{errors.name}</p> : null}
//         <label className="name2">
//         </label>
//         <div className="fld2">
//           <input
//             type="email"
//             placeholder='email'
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onBlur={handleBlur}
//             required
//           />
//           </div>
//           {errors.email && touched.email ? <p>{errors.email}</p> : null}

//         <label className="name3">
//         </label>
//         <div className="fld3">
//           <input
//             type="password"
//             placeholder='password'
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={handleBlur}
//             required
//             />
//             {errors.password && touched.password ? <p>{errors.password}</p> : null}
//           </div>
//           <label className="name3">
//           </label>
//           <div className="fld3">
//             <input type="password"  placeholder='confirmpassword' name="Confirmpassword" value={password} onChange={handleChange}   onBlur={handleBlur} required/>
//           </div>  
//             {errors.Confirmpassword && touched.Confirmpassword ? <p>{errors.Confirmpassword}</p> : null}

//         <br/>
//           <button type="submit" onChange={handleSubmit} >Register</button>
//       </form>
//       </div>
//     </div>  
//   );
//   }
// export default RegistrationForm;



































































// const RegistrationForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const [agreeTerms, setAgreeTerms] = useState(false);
// const navigate=useNavigate();
//   const handleSubmit = (e) => {
//    if(name===''&& email=='' && password=='' && address==='' && city==='' && country==='' && gender===''){
//     setError('Please fill in all fields');
//    }
//    else {
//     alert('Registration succesfull');
//     navigate('/Login');
//    }
// };
//   return (
//     <div className="reg-container">
//     <div className="registration-form">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="firstName">Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-gp">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="text"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
       
//         <div className="form-group">
//           <label htmlFor="agreeTerms">
//             <input
//               type="checkbox"
//               id="agreeTerms"
//               checked={agreeTerms}
//               onChange={(e) => setAgreeTerms(e.target.checked)}
//               required
//             />{' '}
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit" >Register</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;

