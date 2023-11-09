import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

 function Review() {
  return (

    <div className='container w-25  my-3  bg-dark text-light'>
        <br/>
    <form>
      <h6>Go-review <i className="fa-solid fa-cart-shopping"></i></h6>
      <hr />
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      <MDBBtn type='submit'  className='mb-5 btn-dark' block>
        Submit Review
      </MDBBtn>
    </form>
    </div>
  );
}
export default Review