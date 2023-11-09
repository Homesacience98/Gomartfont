import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundColor:'grey'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Gomart </h1>
              <h5 className='mb-4'>Best &amp; Shop Kids wear</h5>
              <MDBBtn
                className="m-2  btn-outline-light"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href='/boylist'
              >
            Boy
              </MDBBtn>
              <MDBBtn
                className="m-2 btn-outline-light"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href='/girllist'
              >
                Girl
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}