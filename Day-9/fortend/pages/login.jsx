import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import {setName,setEmail,setPass} from '../action'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("https://www.websitedesign-service.com/wp-content/uploads/2019/11/slide-ecommerce.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '1670px',
    marginRight: '100px',
    marginLeft:'-300px ',
  },
  login: {
    width: '400px',
    padding: '60px',
    borderRadius: '10px',
    backgroundColor: 'rgb(45, 44, 44,0.4)',
    marginLeft: '120px',
    paddingRight:'100px',
    marginRight:'650px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '29px',
    fontWeight: 'bold',
    color: '#b6afaf',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  button: {
    width: '50%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#2ac634',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginLeft: '70px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff',
  },
};

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const check = async (e) => {
    e.preventDefault();
    try {
      console.log(name);
      console.log(email);
      console.log(pass);

      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          name: name,
          email: email,
          password: pass,
        }
      );

      dispatch(login({
        username: name
      }));

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In " + name);

      navigate("/Dboard");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const [checkpass, setCheckPass] = useState(false);

  return (
    <div className="tall">
      <div style={styles.container}>
        <div style={styles.login}>
          <form onSubmit={check}>
            <h2 style={styles.title}>Login</h2>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="text"
                name="name"
                value={name}
                placeholder="Enter your username"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="password"
                name="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button style={styles.button} type="submit">
              Login
            </button>

            {checkpass && navigate('/Intermediate')}
            <Link to="/register" style={styles.registerLink}>
              Don't have an account? Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
















































































































// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { setName,setEmail,setPass } from '../action';
// import axios from 'axios';
// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
//     backgroundImage: 'url("https://www.websitedesign-service.com/wp-content/uploads/2019/11/slide-ecommerce.jpg")',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     width: '1670px',
//     marginRight: '100px',
//     marginLeft:'-300px ',
//     // marginTop:'10px',
//   },
//   login: {
//     width: '400px',
//     padding: '60px',
//     borderRadius: '10px',
//     backgroundColor: 'rgb(45, 44, 44,0.4)',
//     marginLeft:'150px',
//     paddingRight:'100px',
//     marginRight:'650px',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '29px',
//     fontWeight: 'bold',
//     color: '#fff',
//     textTransform: 'uppercase',
//   },
//   formGroup: {
//     marginBottom: '20px',

//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign:'center',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//   },
//   button: {
//     width: '50%',
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#2ac634',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     marginLeft:'60px',
//     marginRight:'500px',
//   },
//   registerLink: {
//     display: 'block',
//     marginTop: '10px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     color: '#fff',
//   },
// };


// function Login({
//   email,
//   pass,
//   name,
//   setEmail,
//   setName,
//   setPass,
// }) {
//   const check = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8181/api/v1/auth/authenticate",
//         {
//           name:name,
//           email: email,
//           password: pass,
//         }
//         );
        
//         console.log(response.data);
//         localStorage.setItem('token', response.data.token);
//         console.log(localStorage.getItem('token'));

//       window.alert("Successfully Logged In");

      

//       navigate("/Dboard");
//     } catch (error) {
//       console.log(error);
//       window.alert("Invalid Credentials");
//     }
//   };

//   const navigate = useNavigate();
  
  
//   const [checkpass, setCheckPass] = useState(false);
  
//   return (
//     <div className="tall">
//     <div style={styles.container}>
//       <div style={styles.login}>
//         <form onSubmit={check}>
//           <h2 style={styles.title}>Login</h2>
//           <div style={styles.formGroup}>
//             <input
//               style={styles.input}
//               type="text"
//               name="name"
//               value={name}
//               placeholder="Enter your username"
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <input
//               style={styles.input}
//               type="password"
//               name="pass"
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button style={styles.button} type="submit">
//             Login
//           </button>
//           {checkpass && alert('Successful login ' + name)}
//           {checkpass && navigate('/Intermediate')}
//           <Link to="/register" style={styles.registerLink}>
//             Don't have an account? Register
//           </Link>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     email: state.login.email,
//     pass: state.login.pass,
//     name: state.login.name,
//   };
// };

// const mapDispatchToProps = {
//   setEmail,
//   setPass,
//   setName,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);





































































































// import React, { useState } from 'react';
// import './LoginForm.css';
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword]=useState('');
//   const [error, setError] = useState('');
//   const navigate=useNavigate();

//   const handleSubmit = (e) => {
//    if(email==='' && password===''){
//     setError('');
//   }
//   else{
//     setError('Invalid email or password');
//   }
//   alert("Login is successfull");
//   navigate('/Dboard');
//   };

//   // const handleForgotPassword = () => {
//   //   Handle forgot password logic here
//   // };

//   return (
//     <div className="login-con">
//       <div className="login-form">
//         <h2 className="login-header">Sign In</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             /><br></br>
//             <label htmlFor="password">Password:</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="show-password-button"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button><br></br>
//             {/* <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
//               Forgot Password?
//             </a> */}
//           <button type="submit" onChange={handleSubmit} required>
//             Sign In
//           </button><br></br>
//           <a href="/register">Sign up</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
