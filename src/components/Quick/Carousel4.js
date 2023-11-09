import Carousel from 'react-bootstrap/Carousel';
import ad11 from '../../images/200.jpg';
import ad12 from '../../images/201.jpg';
import ad13 from '../../images/202.jpg';

import Brands from "../Views/Brands";

function Caro4() {
  return (

    <div className= ' ' >
    <div className=' '>
    <Carousel fade>
      <Carousel.Item>
       <a  href='nf'> <img  src={ad11}
        className='h-100 w-100 '
 text="First slide" /></a>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}<Brands/>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='Balenciaga'> <img  src={ad12}
                className='h-100 w-100'

 text="Second slide" /></a> 
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <Brands/>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={ad13}
                className='h-100 w-100'

 text="Third slide" />
        <Carousel.Caption>
          {/* <h6>Third slide label</h6>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          <Brands/>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default Caro4;