import Carousel from 'react-bootstrap/Carousel';
import ad11 from '../../images/110.jpg';
import ad12 from '../../images/104.jpg';
import ad13 from '../../images/100.jpg';


function Caro2() {
  return (
    <div className='row'>
    <Carousel fade>
      <Carousel.Item>
       <a  href='nf'> <img  src={ad11}
        className='h-100 w-100 '
 text="First slide" /></a>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='Balenciaga'> <img  src={ad12}
                className='h-100 w-100'

 text="Second slide" /></a> 
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={ad13}
                className='h-50 w-100'

 text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p> */}
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          {/* </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Caro2;