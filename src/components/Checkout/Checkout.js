import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Checkout() {
  return (
    <div class='container' >
      <hr/>
    <h5> Checkout   <i class='fab fa-cc-amazon-pay'></i> </h5> 
      <br/>
<hr/>

      <div class='row'>

<br/>
<br/>


    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

 

      <MDBBtn className='mb-4 btn-sm  btn-dark' type='submit' block>
        Checkout  <i class='fab fa-cc-amazon-pay'></i> 
      </MDBBtn>
    </form>
    </div>
    </div>

  );
}