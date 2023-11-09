import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ProfileForm() {
  const [customerData, setCustomerData] = useState({
    customeruser: '', // Initialize with an empty string
    phone_number: '',
    city: '',
    customerimage: null, // Use 'null' if no image is selected
  });

  useEffect(() => {
    // Retrieve the logged-in user from local storage when the component mounts
    const user = localStorage.getItem('loggedInUsername') || '';
    setCustomerData({ ...customerData, customeruser: user });

    try {
      const existingData = JSON.parse(localStorage.getItem('lastCustomer'));
      if (existingData) {
        setCustomerData(existingData);
      }
    } catch (error) {
      console.error('Error parsing existing data:', error);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCustomerData({
      ...customerData,
      customerimage: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('customeruser', customerData.customeruser);
    formData.append('phone_number', customerData.phone_number);
    formData.append('city', customerData.city);
    formData.append('customerimage', customerData.customerimage);

    const response = await fetch('https://itssaj.pythonanywhere.com/api/add-customer/', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      window.location.reload();
      window.open('/profile-view');
    } else {
      console.error('Update failed with status:', response.status);
    }
  };

  return (
    <div className="container mt-4">
      <hr style={{ color: 'lime' }} />
      <div style={{ backgroundColor: '#097969', color: 'white' }}>
        &nbsp; <h6> &nbsp; Profile Settings <i class="fas fa-marker"></i></h6>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">
            <i class='fas fa-mobile-alt'></i> Phone Number:
          </label>
          <input
            type="text"
            className="form-control"
            name="phone_number"
            value={customerData.phone_number}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            <i class='fas fa-map-marker-alt'></i> Location:
          </label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={customerData.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="customerimage" className="form-label">
            <i class='fas fa-images'></i> Profile Picture:
          </label>
          <input
            type="file"
            className="form-control"
            name="customerimage"
            onChange={handleImageChange}
          />
        </div>

        <button
          type="submit"
          style={{ float: '', textDecoration: '', color: 'lime' }}
          className="btn btn-dark"
        >
          <i class='fas fa-user-cog'></i> Update Profile
        </button>
      </form>
      <br/>
    </div>
  );
}

export default ProfileForm;
