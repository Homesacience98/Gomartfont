import Carousel from 'react-bootstrap/Carousel';
import ad11 from '../../images/350.jpg';
import ad12 from '../../images/308.jpg';
import ad13 from '../../images/309.jpeg';


function Caro6() {
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
                className='h-100 w-100'

 text="Third slide" />
        <Carousel.Caption>
          {/* <h6>Third slide label</h6>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default Caro6;