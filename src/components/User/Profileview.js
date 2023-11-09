import React, { useState, useEffect } from 'react';
import Navbar3 from '../Navbar/Navbar3';
import { Link } from 'react-router-dom';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import CartUser from '../Cart/CartUser';
import ProfileForm from './ProfileForm';

function ViewProfile() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShow, setShowShow] = useState(false);
  const [showShow2, setShowShow2] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const toggleShow2 = () => setShowShow2(!showShow2);

  useEffect(() => {
    // Fetch the list of customers from your Django backend
    fetch('https://itssaj.pythonanywhere.com/api/customer-list/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching customer list:', error);
        setLoading(false);
      });
  }, []);

  const loggedInUser = localStorage.getItem('loggedInUsername');
  const filteredCustomers = customers.filter((customer) => customer.customeruser === loggedInUser);
  const reversedCustomers = filteredCustomers.slice().reverse();
  const lastCustomer = reversedCustomers[0];
  // Save the lastCustomer to local storage
  localStorage.setItem('lastCustomer', JSON.stringify(lastCustomer));

  return (
    <div>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6sIBZCFyz14"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <hr style={{ color: 'lime' }} />

      {loading ? (
        <p>{loggedInUser} profile...</p>
      ) : lastCustomer ? (
        <div class='' style={{backgroundColor:''}}>
          <div class='container' style={{backgroundColor:'white', borderRadius: '7px', border: 'lime 2px solid', }}>
            <br/>
                  <h4       style={{float:'right'}}
 ><b> <i class='fab fa-expeditedssl'></i> </b></h4>
            <img
              src={`https://itssaj.pythonanywhere.com${lastCustomer.customerimage}`}
              alt="Profile"
              style={{ maxWidth: '200px', border: 'white 3px solid', borderRadius: '10px',marginLeft:'15px',marginTop:'-10px' }}
            />
{/* <i class='fas fa-images'></i> */}
          <div class=''>
            <Link tag="a" onClick={toggleShow2} style={{ float: 'right', textDecoration: 'none', color: 'green', marginTop: '-19px' }}>
              <span style={{ color: 'green' }}>
                <i className="fas fa-marker"></i> Edit Profile
              </span>
            </Link>
            <i class='fas fa-images'></i>

          </div>
          <hr style={{ color: 'green' }} />


          <MDBCollapse show={showShow2}>
            <ProfileForm />
          </MDBCollapse>

          </div>

<hr/>
          <div style={{ backgroundColor: '#191970', border: 'solid white 2px', color: 'white' }}>
            <br />
            <p>
              <strong>
                &nbsp; <i class="fas fa-user-injured"></i>{' '}
              </strong>
              <b> {lastCustomer.customeruser} </b>
            </p>
          </div>

          <hr style={{ color: 'pink' }} />

          <div class='container' style={{backgroundColor:'#F0F0F0', borderRadius: '7px' , border: 'solid black 1px'}}>

<br/>
          <p style={{ float: '' }}>
            <strong>
              {' '}
              <i style={{ color: 'red' }} class="fab fa-centercode"></i> Verified Gomart Profile{' '}
            </strong>{' '}
            <i style={{ color: 'red' }} class="fas fa-check-circle"></i>{' '}
          </p>

          <hr style={{ color: '' }} />

          <p style={{ float: '', color: 'grey' }}>
            <strong> <i class="fas fa-phone"></i> Phone Number: &nbsp;&nbsp; </strong>
            {lastCustomer.phone_number}
          </p>

          <p style={{ float: '', color: 'grey' }}>
            <strong> <i class="fas fa-map-marker-alt"></i> &nbsp; Location: </strong>
            {lastCustomer.city}
          </p>
          <br/>
          </div>

        </div>
      ) : (
        <p>No customer profile found for the logged-in user.</p>
      )}

<div class='container' style={{backgroundColor:'white', borderRadius: '3px' }}>
  <br/>
        <Link tag="a" onClick={toggleShow} style={{ float: 'right', textDecoration: 'none', color: '#088F8F' }}>
          <i class="fas fa-cart-arrow-down"></i>
          <span style={{ color: '#088F8F' }}> Cart</span>
        </Link>

        <Link to="/checkout" style={{ float: '', textDecoration: 'none', color: 'brown' }}>
          <i class="fab fa-cc-amazon-pay"></i> &nbsp; Checkout
        </Link>
<hr/>
      </div>
      <MDBCollapse show={showShow}>
          <CartUser />
        </MDBCollapse>

      <hr style={{ color: 'pink' }} />
      <br /> <br /> <br />
    </div>
  );
}

export default ViewProfile;
