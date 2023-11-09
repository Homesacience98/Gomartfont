import Carousel from 'react-bootstrap/Carousel';
import ad11 from '../../images/108.jpg';
import ad12 from '../../images/112.jpg';
import ad13 from '../../images/113.jpg';


function Caro() {
  return (
    <div className='row'>
    <Carousel fade>
      <Carousel.Item>
        <img  src={ad11}
        className='h-100 w-100 '
 text="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={ad12}
                className='h-100 w-100'

 text="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={ad13}
                className='h-50 w-100'

 text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Caro;