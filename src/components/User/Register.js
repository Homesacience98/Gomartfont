import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../style.css'
import Alert from 'react-bootstrap/Alert';
import Regbag from '../../images/203.jpg'
import { Link } from 'react-router-dom';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [errorMessage2, setErrorMessage2] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.password);
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return; 
    }
    if (/\d/.test(formData.username)) {
      setErrorMessage('Username cannot contain numbers');
      return;
    }
    if (!/^[A-Z].*$/.test(formData.username)) {
      setErrorMessage('Username must start with a capital letter');
      return;
    }
    try {
      const response = await fetch('http://itssaj.pythonanywhere.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Request Content-Type:', response.headers.get('Content-Type'));
      if (response.status === 201) {
        console.log('Registration successful!');
        setErrorMessage2('Registration successful!');
        window.location.href = '/login';
        return;
      } else {
        const data = await response.json();
        console.error('Registration failed:', data);

        setErrorMessage('Registration failed kindly confirm information ');

      }
    } catch (error) {
      // console.error('Registration failed:', error);
      
      console.error('Registration failed:', formData);

    }
  };

  return (


    <div style={{backgroundColor:'#171717'}} >
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
<h5 class="text-success"> Register</h5>
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
          Register
      <span></span>
   </button> 
   </center>
 </form>
 <br/>
 <hr/>
 <div class='text-decoration-none text-secondary'> Already have an account ? <Link class='text-decoration-none text-info' to='/login'> Login</Link> </div>

</div>

    </div>
  );
}

export default Register;