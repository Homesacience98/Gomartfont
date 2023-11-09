import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; 
import Alert from 'react-bootstrap/Alert';
import Regbag from '../../images/203.jpg'
import { Link } from 'react-router-dom';


function Login() {
  const { loggedInUsername, login } = useContext(AuthContext); 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://itssaj.pythonanywhere.com/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log('Login successful!');
        const username = formData.username;
        login(username); 
        setErrorMessage2(`Login successful ${username}`);
        setErrorMessage2(`Welcome ${username}`);

        window.location.href = '/';

      } else {
        console.error('Login failed');
        setErrorMessage('Login failed! Check username and password, then try again');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <div class='container'>  <div class='row'> <img src={Regbag}/></div>   <div class='row'> <img src={Regbag}/></div>     <div/>

</div>

<div onSubmit={handleSubmit} class="login-box my-5">
{errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
          {errorMessage}
        </Alert>
      )}
            {errorMessage2 && (
        <Alert variant="success" onClose={() => setErrorMessage2('')} dismissible>
          {errorMessage2}
        </Alert>
      )}
      <h5 class="text-white"> Login</h5>
<hr/>


<h6 style={{textAlign:'center', color:'white'}}>Gomart  <i class="fa-solid fa-cart-shopping"></i></h6>
<br/>

 <form>
   <div class="user-box">
     <input   type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
/>
     <label>Username</label>
   </div>
   <div class="user-box">
     <input     type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
/>
     <label>Password</label>
   </div><center>
  <button id='btn'  className='outline-dark' variant="dark" style={{backgroundColor:'black'}} type="submit">
          Login
      <span></span>
   </button> 
   </center>
 </form>
 <br/>
 <hr/>
 <div class='text-decoration-none text-secondary'> you dont have an account ? <Link class='text-decoration-none text-success' to='/register'> Register</Link> </div>


</div>


      {loggedInUsername && (
        <div>
          <p>Welcome, {loggedInUsername}!</p>
        </div>
      )}
      {errorMessage2 && <p>{errorMessage2}</p>}
    </div>
  );
}

export default Login;